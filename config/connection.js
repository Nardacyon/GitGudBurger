const mysql = require("mysql");

const connectionConfig = {
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root",
    database: "burger_db"
};

const connection = mysql.createConnection(connectionConfig);

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
})

module.exports = connection;