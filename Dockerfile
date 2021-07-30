FROM node:14.15-alpine
WORKDIR /app

COPY src /app/src
COPY package.json /app/package.json
COPY dist /app/dist
COPY data /app/data

RUN npm install && \
    npm rebuild bcrypt --build-from-source
COPY . .
CMD ["npm","start"]