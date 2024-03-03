FROM node:14-alpine

WORKDIR /actividade_spint2-3_equipe6

COPY . /actividade_spint2-3_equipe6

RUN npm install

ENV NAME actividade_spint2-3_equipe6

EXPOSE 5500

CMD ["node", "index.js"]
