FROM node:14.15-alpine
WORKDIR /usr/src
COPY . .

RUN npm install
RUN npm run build

EXPOSE 3200

CMD ["npm","start"]