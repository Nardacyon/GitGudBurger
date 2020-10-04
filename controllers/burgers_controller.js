const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
    burger.read(function(data) {
        res.render("index", { burgers: data });
    });
});

router.post("/api/burger", function(req, res){
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(res) {
        res.json({ id: res.insertId})
    });
});

router.put("/api/burger/:id", function(req, res) {
    const id = parseInt(req.params.id);
    burger.update(id, function (res) {
        res.status(200).end();
    })
});

router.delete("/api/burger/:id", function(req, res) {
    burger.destroy(req.params.id, function(res) {
        res.status(200).end();
    })
});

module.exports = router;