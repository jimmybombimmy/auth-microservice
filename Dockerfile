FROM node:alpine3.20

WORKDIR /app

RUN apk update && \
  apk add --no-cache bash && \
  apk add postgresql-client

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "npm run seed && npm run dev"]