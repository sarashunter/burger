const connection = require('./connection')

const orm = {
    selectAll: () => {
        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) throw err;

            console.log(res);
        });
    }
}

// const insertOne = function(){};

// const updateOne = function(){};

module.exports = orm;