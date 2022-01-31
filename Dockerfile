FROM node:erbium-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --pure-lockfile

COPY src src

CMD [ "yarn", "start" ]