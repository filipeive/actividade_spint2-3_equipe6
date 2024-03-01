const express = require('express');
const app = express();
const port = 5600;

//teste roteando
const teste = require('./routes/teste');
app.use('/', teste);

const getDomain = require('./routes/getDomain');
app.use('/api/domain-info/:domain', getDomain);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
