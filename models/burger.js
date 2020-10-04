const orm = require("../config/orm");

const burger = {
    read: function() {
        return new Promise(function(resolve, reject) {
            if (err) reject (err);
            orm.retrieve().then(function(data) {
                resolve(data);
            });
        });

    },
    create: function(burger_name) {
        return new Promise(function(resolve, reject) {
            if (err) reject (err);
            orm.create(burger_name).then(function(data) {
                resolve(data);
            });
        });
    },
    update: function(id, devoured) {
        return new Promise(function(resolve, reject) {
                if (err) reject (err);
                orm.update(id, devoured).then(function(data) {
                resolve(data);
            });
        });
    },
    destroy: function(id) {
        return new Promise(function(resolve, reject) {
                if (err) reject (err);
                orm.destroy(id).then(function(data) {
                resolve(data);
            });
        });
    }
};

module.exports = burger;