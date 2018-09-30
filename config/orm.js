const connection = require('./connection')

// const orm = {

// }
const selectAll = () =>{
    connection.query("SELECT * FROM burgers", function(err, res){
        if(err) throw err;

        console.log(res);
    })
}

// const insertOne = function(){};

// const updateOne = function(){};

module.exports = selectAll;