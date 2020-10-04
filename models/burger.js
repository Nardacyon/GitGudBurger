const orm = require("../config/orm.js");

const burger = {
    read: function(res) {
        orm.retrieve("burgers", (data) => {
            res(data);
        });
    },
    create: function(values, res) {
        orm.create("burgers", ["burger_name", "devoured"], values, (data) => {
            res(data);
        });
    },
    update: function(id, res) {
        orm.update("burgers", "devoured=true", id, res, (data) => {
            res(data);
        });
    },
    destroy: function(res, id) {
        orm.destroy("burgers", res, id, (data) => {
            res(data);
        });
    }
};

module.exports = burger;