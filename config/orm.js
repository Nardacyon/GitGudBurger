const connection = require("./connection.js");

function queryHelper(nums) {
    const arr = [];

    for (let i = 0; i < nums; i++) {
        arr.push("?");
    }

    return arr.toString();
}

const orm = {
    selectAll: function(cb) { 
        connection.query("SELECT * FROM burgers", (err, data) => {
            if(err) throw err;
            cb(data);
        });
    },

    insertOne: function(values, cb) {
        connection.query(`INSERT INTO burgers (burger_name) VALUES ?`, values, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },

    updateOne: function(id, cb) {
        connection.query(`UPDATE burgers SET devoured = true WHERE id = ?`, id, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },

    resetAll: function(cb) {
        connection.query(`UPDATE burgers SET devoured = false WHERE id > 0`, (err, data) => {
            if(err) throw err;
            cb(data);
        });
    },

    deleteOne: function(id, cb) {
        connection.query(`DELETE FROM burgers WHERE id = ${id}`, (err, data) => {
            if(err) throw err;
            cb(data);
        });
    }
    // retrieve: function(table, cb) {
    //     connection.query("SELECT * FROM ??", [table], function(err, data) {
    //         if (err) throw err;
    //         cb(data);
    //     });
    // },

    // create: function(table, columns, values, cb) {
    //     connection.query(`INSERT INTO ?? (${columns.toString()}) VALUES (${queryHelper(values.length)})`, [table, values], (err, data) => {
    //         if (err) throw (err);
    //         cb(data);
    //     });

    // },

    // update: function(table, updateVal, id, cb) {
    //     connection.query(`UPDATE ?? SET ${updateVal} WHERE id = ?`, [table, id], (err, data) => {
    //         if (err) throw (err);
    //         cb(data);
    //     });
    // },

    // destroy: function(table, cb, id) {
    //     connection.query(`DELETE FROM ?? WHERE id = ?`, [table, id], (err, data) => {
    //         if (err) throw (err);
    //         cb(data);
    //     });
    // }
}

module.exports = orm;