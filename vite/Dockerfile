FROM node:16-alpine as base

USER node

WORKDIR /home/node/app

COPY package*.json ./

RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN npm install
RUN npm cache clean --force
