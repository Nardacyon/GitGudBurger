var orm = require("../config/orm.js");

var burger = {
    retrieve: function(cb) {
        orm.retrieve("burgers", (data) => {
            cb(data);
        });
    },
    create: function(values, cb) {
        orm.create("burgers", ["burger_name", "devoured"], values, (data) => {
            cb(data);
        });
    },
    update: function(id, cb) {
        orm.update("burgers", "devoured=true", id, cb, (data) => {
            cb(data);
        });
    },
    destroy: function(cb, id) {
        orm.destroy("burgers", cb, id, (data) => {
            cb(data);
        });
    }
};

module.exports = burger;