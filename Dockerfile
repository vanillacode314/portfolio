FROM node:20-slim AS base
ENV BUN_INSTALL_CACHE_DIR=/root/.cache/bun
RUN npm i -g bun
COPY . /app
WORKDIR /app


FROM base AS prod-deps
RUN --mount=type=cache,id=s/f1887b48-fdc5-404f-947d-d5e1677482fc-/root/.cache/bun,target=/root/.cache/bun bun install --production --frozen-lockfile

FROM base AS build
ARG META_CONVERSIONS_API_ACCESS_TOKEN
ARG META_PIXEL_ID
RUN --mount=type=cache,id=s/f1887b48-fdc5-404f-947d-d5e1677482fc-/root/.cache/bun,target=/root/.cache/bun bun install --frozen-lockfile
RUN bun run build


FROM caddy:alpine
RUN --mount=type=cache,id=s/f1887b48-fdc5-404f-947d-d5e1677482fc-apk,target=/var/cache/apk apk add --update nodejs supervisor

COPY ./caddy/Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist/client /var/www

COPY --from=build /app/dist/server /app/dist/server
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY ./server.mjs /app/server.mjs

RUN mkdir -p /var/log/supervisor
COPY supervisord.conf /etc/supervisord.conf
ENTRYPOINT ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
