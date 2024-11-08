FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app


FROM base AS prod-deps
RUN --mount=type=cache,id=s/f1887b48-fdc5-404f-947d-d5e1677482fc-pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=s/f1887b48-fdc5-404f-947d-d5e1677482fc-pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build


FROM nginx:alpine
RUN --mount=type=cache,id=s/f1887b48-fdc5-404f-947d-d5e1677482fc-apk,target=/var/cache/apk apk add --update nodejs supervisor

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/client /usr/share/nginx/html

COPY --from=build /app/dist/server /app/dist/server
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY ./server.mjs /app/server.mjs

RUN mkdir -p /var/log/supervisor
COPY supervisord.conf /etc/supervisord.conf
ENTRYPOINT ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
