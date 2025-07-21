FROM node:alpine3.20

WORKDIR /app

RUN apk update && \
  apk add --no-cache bash && \
  apk add postgresql-client

COPY package*.json .

RUN npm ci

RUN echo falls

COPY . .

RUN npm run build

EXPOSE 3000

# Don't run dev in prod - fine for now
CMD ["npm", "run", "dev"]