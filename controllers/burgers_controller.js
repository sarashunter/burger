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
    burger.create([
        "burger_name"
      ], [
        req.body.name
      ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("req.body " + req.body);

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
