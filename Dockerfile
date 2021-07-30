FROM node:14.15-alpine
#Create app directory
WORKDIR /app

COPY src /app/src
COPY package.json /app/package.json
COPY dist /app/dist
COPY data /app/data

# copy codebase to docker codebase
RUN npm install
COPY . .
CMD ["npm","start"]