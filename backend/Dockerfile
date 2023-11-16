FROM node:20.9.0-alpine3.18

RUN addgroup -S app && adduser -S app -G app
USER app

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "start"]