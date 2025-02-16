FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm i -g bun
COPY . /app
WORKDIR /app


FROM base AS prod-deps
RUN bun install --production --frozen-lockfile

FROM base AS build
ARG META_CONVERSIONS_API_ACCESS_TOKEN
ARG META_PIXEL_ID
RUN bun install --frozen-lockfile
RUN npm run build


FROM base
COPY --from=build /app/dist /app/dist
COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules
ENTRYPOINT ["node", "/app/dist/server/entry.mjs"]
