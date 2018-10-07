var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get("/", function (req, res) {
    console.log("in get /");
    burger.all(function (data) {
        console.log("in here");
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });

});

router.post("/api/burgers", function (req, res) {
    console.log('req body name ' + req.body.name);
    burger.create(req.body.name, function (result) {

            res.json({ id: result.insertId });
        });
});

module.exports = router;
