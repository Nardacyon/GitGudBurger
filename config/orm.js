const connection = require("./connection.js");

function helper(nums) {
    const arr = [];

    for (let i = 0; i < nums; i++) {
        arr.push("?");
    }

    return arr.toString();
}

const orm = {
    retrieve: function(table, cb) {
        connection.query("SELECT * FROM ??", [table], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    create: function(table, columns, values, cb) {
        connection.query(`INSERT INTO ?? (${columns.join()}) VALUES (${helper(values.length)})`, [table, values], (err, data) => {
            if (err) throw (err);
            cb (data);
        });

    },
    update: function(table, updateVal, id, cb) {
        connection.query(`UPDATE ?? SET ${updateVal} WHERE id = ?`, [table, id], (err, data) => {
            if (err) throw (err);
            cb(data);
        });
    },
    destroy: function(table, cb, id) {
        connection.query(`DELETE FROM ?? WHERE id = ?`, [table, id], (err, data) => {
            if (err) throw (err);
            cb(data);
        });
    }
}

module.exports = orm;