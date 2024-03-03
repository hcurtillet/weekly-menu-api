FROM node:20 as build

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

RUN yarn build

# Path: Dockerfile
FROM node:20

WORKDIR /app

COPY --from=build /app/package.json ./

RUN yarn --production

COPY --from=build /app/dist ./dist

CMD ["yarn", "start"]
