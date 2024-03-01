var express = require("express");
const router = express.Router();
const axios = require('axios');
const cors = require('cors');

// Sua chave de API
const API_KEY = 'ws6r4sbrlnhmv0v8o5lucurb632ruqiezi42p755cw7u5s98qn0xuccummud197zbsx5nk';
  // Middleware para habilitar CORS
router.use(cors());
router.get('/domain-info/:domain', async (req, res) => {
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

module.exports = router;