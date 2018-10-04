const connection = require('./connection')

const orm = {
    selectAll: (table, cb) => {
        connection.query("SELECT * FROM ??", [table], function (err, res) {
            if (err) throw err;

            console.log('orm res ' + res);

            cb(res);
        });
    }
}

// const insertOne = function(){};

// const updateOne = function(){};

module.exports = orm;