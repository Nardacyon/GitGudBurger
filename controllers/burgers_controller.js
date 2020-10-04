const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res) {
    burger.read().then(function(data){
        res.render("index", { burgers: data });
    });
});

router.post("/api/burgers", function(req, res){
    burger.create(req.body).then(function(data){
        res.json(data);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.update(req.params.id, req.body.devoured).then(function(data){
        res.status(200).end();
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    burger.destroy(req.params.id).then(function(data){
        res.send(200).end();
    });
});

module.exports = router;