const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll((data) => {
            cb(data);
        });
    },

    insertOne: function(values, cb) {
        orm.insertOne(values, (data) => {
            cb(data);
        });
    },

    updateOne: function(id, cb) {
        orm.updateOne(id, (data) => {
            cb(data);
        });
    },

    deleteOne: function(id, cb) {
        orm.deleteOne(id, (data) => {
            cb(data);
        });
    }
};

module.exports = burger;