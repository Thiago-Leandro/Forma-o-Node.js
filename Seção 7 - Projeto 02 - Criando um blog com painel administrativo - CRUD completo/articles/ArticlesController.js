const express = require("express");
const router = express.Router();

router.get("/articles", (req, res) => {
    res.send("ROTA DE ARTIGO")
});

router.get("/admin/categories/new", (req, res) => {
    res.send("ROTA PARA CRIAR UM NOVO ARQUIVO!")
});

module.exports = router;