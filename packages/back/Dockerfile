FROM node:erbium-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn --pure-lockfile --production

COPY .env.example .env
COPY babel.config.js babel.config.js
COPY tsconfig.json tsconfig.json
COPY src src

RUN yarn build


CMD [ "yarn", "start" ]