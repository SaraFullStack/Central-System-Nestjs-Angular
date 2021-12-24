FROM node:13

ENV CENTRAL_HOME /home/node/backend

WORKDIR ${CENTRAL_HOME}

COPY . .

RUN npm install
RUN npm install typescript -g
RUN npm run build
RUN npm i @types/swagger-ui-express

CMD [ "npm","run","start:dev"]