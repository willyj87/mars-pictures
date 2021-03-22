FROM node:fermium-alpine

WORKDIR /home/node/app

COPY package.json .

RUN npm i

COPY gatsby-config.js .

# Optionally, copy your .env file to the container filesystem
COPY .env .

EXPOSE 8000