const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5500;

// Middleware para habilitar CORS
app.use(cors());

// Sua chave de API
const API_KEY = 'ws6r4sbrlnhmv0v8o5lucurb632ruqiezi42p755cw7u5s98qn0xuccummud197zbsx5nk';
app.get('/', (req, res) => {
    res.send('Servidor de consulta de domínio está rodando.');
  });  
app.get('/api/domain-info/:domain', async (req, res) => {
  try {
    const domain = req.params.domain;
    // Fazendo uma requisição para a API do Who Hosts This?
    const response = await axios.get(`https://www.who-hosts-this.com/APIEndpoint/Detect?key=${API_KEY}&url=${domain}`);
    
    // Retornando os dados obtidos da API do Who Hosts This?
    res.json(response.data);
  } catch (error) {
    // Em caso de erro, retorna um status 500 e uma mensagem de erro
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://127.0.0.1:${port}/public/`);
});
 