var express = require('express');
var burger = require('../models/burger');

var router = express.Router();

router.get("/", function (req, res) {
    // console.log("in get /");
    // burger.all(function (data) {
    //     console.log("in here");
    //     var hbsObject = {
    //         burgers: data
    //     };
    //     console.log(hbsObject);
    //     res.render("index", hbsObject);
    // });

    console.log("blah");
    res.end('hmph');
});

// router.post("/api/cats", function (req, res) {
//     cat.create([
//         "name", "sleepy"
//     ], [
//             req.body.name, req.body.sleepy
//         ], function (result) {
//             // Send back the ID of the new quote
//             res.json({ id: result.insertId });
//         });
// });

// router.put("/api/cats/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     cat.update({
//         sleepy: req.body.sleepy
//     }, condition, function (result) {
//         if (result.changedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// router.delete("/api/cats/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     cat.delete(condition, function (result) {
//         if (result.affectedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// Export routes for server.js to use.
module.exports = router;





// Create the router for the app, and export the router at the end of your file.

