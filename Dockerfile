FROM node:20 as build

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

RUN yarn build

# Path: Dockerfile
FROM node:20

WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/package.json ./

RUN yarn --production

COPY --from=build /app/dist ./dist

CMD ["node", "dist/main.js"]
