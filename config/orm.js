const connection = require('./connection')

const orm = {
    selectAll: (table, cb) => {
        connection.query("SELECT * FROM ??", [table], function (err, res) {
            if (err) throw err;

            console.log('orm res ' + res);

            cb(res);
        });
    },
    create: function(table, name, cb) {
    
        connection.query("INSERT INTO ?? (burger_name, devoured) VALUES (?, 0);", [table, name], function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
}

// const insertOne = function(){};

// const updateOne = function(){};

module.exports = orm;