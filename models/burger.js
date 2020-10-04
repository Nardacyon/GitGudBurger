const orm = require("../config/orm.js");

const burger = {
    read: function(cb) {
        orm.retrieve("burgers", function(res) {
            cb(res);
        });
    },
    create: function(values, cb) {
        orm.create("burgers", ["burger_name", "devoured"], values, function(res) {
            cb(res);
        });
    },
    update: function(id, cb) {
        orm.update("burgers", "devoured=true", id, cb, function(res) {
            cb(res);
        });
    },
    destroy: function(cb, id) {
        orm.destroy("burgers", cb, id, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;