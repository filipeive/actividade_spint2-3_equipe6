FROM node:14-alpine

WORKDIR /ativ2

COPY . /ativ2

RUN npm install

ENV NAME ativ2

EXPOSE 5600

CMD ["node", "index.js"]
