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
RUN npm run build


FROM base
COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules
ENTRYPOINT ["node", "/app/dist/server/entry.mjs"]
