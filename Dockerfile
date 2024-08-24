FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install pnpm -g
RUN pnpm install

COPY . .

ENV DOCKER true

RUN npm run typeorm:migration:run
RUN npm run build

CMD [ "npm", "run", "start" ]