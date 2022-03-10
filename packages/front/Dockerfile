FROM node:erbium-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn --pure-lockfile

COPY .env.example .env
COPY tsconfig.json tsconfig.json
COPY index.html index.html
COPY tsconfig.node.json tsconfig.node.json
COPY vite.config.ts vite.config.ts
COPY src src

RUN yarn build

RUN yarn --pure-lockfile --production

CMD [ "yarn", "preview" ]