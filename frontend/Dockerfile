FROM node:20.9.0-alpine3.18

RUN addgroup -S app && adduser -S app -G app
USER app

WORKDIR /app

COPY --chown=app:app package*.json ./
RUN npm install
COPY --chown=app:app . .

EXPOSE 3000
CMD ["npm", "start"]