const connection = require("./connection.js");
const orm = {
    selectAll: function(cb) { 
        connection.query("SELECT * FROM burgers", (err, data) => {
            if(err) throw err;
            cb(data);
        });
    },

    insertOne: function(values, cb) {
        connection.query(`INSERT INTO burgers (burger_name) VALUES (?);`, values, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },

    updateOne: function(id, cb) {
        connection.query(`UPDATE burgers SET devoured = true WHERE id = ?;`, id, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },

    resetAll: function(cb) {
        connection.query(`UPDATE burgers SET devoured = false WHERE id > 0;`, (err, data) => {
            if(err) throw err;
            cb(data);
        });
    },

    deleteOne: function(id, cb) {
        connection.query(`DELETE FROM burgers WHERE id = ${id};`, (err, data) => {
            if(err) throw err;
            cb(data);
        });
    }
}
module.exports = orm;