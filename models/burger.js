const orm = require("../config/orm");

// Inside burger.js, import orm.js into burger.js

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.

var burger = {
    all: function (cb) {
        console.log("in burger all");
        orm.selectAll("burgers", function (res) {
            console.log("res is " + res);
            cb(res);
        });
        // },
        // // The variables cols and vals are arrays.
        // create: function(cols, vals, cb) {
        //   orm.create("cats", cols, vals, function(res) {
        //     cb(res);
        //   });
        // },
        // update: function(objColVals, condition, cb) {
        //   orm.update("cats", objColVals, condition, function(res) {
        //     cb(res);
        //   });
        // },
        // delete: function(objColVals, condition, cb) {
        //   orm.delete("cats", objColVals, function(res){
        //     cb(res);
        //   })
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;