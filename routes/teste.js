var express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Servidor de consulta de domínio está rodando.');
});

module.exports = router;