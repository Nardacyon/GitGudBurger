const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();
router.get("/", function(req, res) {
    burger.selectAll((data) => {
        res.render("index", { burgers: data });
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.name, (data) => {
        res.json({ id: data.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    burger.updateOne(req.params.id, (results) => {
        if (results.changedRows == 0) return res.status(404).end();
        else res.status(200).end();
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    burger.deleteOne(req.params.id, (results) => {
        if (results.changedRows == 0) return res.status(404).end();
        else res.status(200).end();
    });
});
module.exports = router;