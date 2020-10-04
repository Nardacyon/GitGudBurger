const connection = require("./connection");

const orm = {
    retrieve() {
        return new Promise(function(resolve, reject) {
            connection.query("SELECT * FROM burgers", (err, data) => {
                if (err) reject (err);
                resolve(data);
            });
        });
    },
    create(burger_name) {
        return new Promise(function(resolve, reject) {
            connection.query("INSERT INTO burgers SET ?", burger_name, (err, data) => {
                if (err) reject (err);
                resolve(data);
            });
        });
    },
    update(id, devoured) {
        return new Promise(function(resolve, reject) {
            connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [devoured, id], (err, data) => {
                if (err) reject (err);
                resolve(data);
            });
        });
    },
    destroy(id) {
        return new Promise(function(resolve, reject) {
            connection.query("DELETE FROM burgers WHERE id = ?", id, (err, data) => {
                if (err) reject (err);
                resolve(data);
            });
        });
    }
}

module.exports = orm;