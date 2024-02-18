const express = require("express");
const router = express.Router();
const Category = require("../categories/Category");
const article = require("./Article");
const slugify = require("slugify");
const Article = require("./Article");

router.get("/articles", (req, res) => {
    res.send("ROTA DE ARTIGO")
});

router.get("/admin/articles/new", (req, res) => {
    Category.findAll().then(categories => {
        res.render("admin/articles/new",{categories: categories})
    })
});

router.post("./Articles/save", (req, res) => {
    var title = req.body.title;
    var body = req.body.body;
    var Category = req.body.category;

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    })

});

module.exports = router;