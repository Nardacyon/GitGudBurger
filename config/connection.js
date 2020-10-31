const mysql = require("mysql");

// const connectionConfig = {
//     host: "localhost",
//     port: 3307,
//     user: "root",
//     password: "root",
//     database: "burger_db"
// };
// const connection = mysql.createConnection(connectionConfig);

var connection;
if(process.env.JAWSDB_ORANGE_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_ORANGE_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3307,
        user: "root",
        password: "root",
        database: "burger_db"
    });
}

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
})


module.exports = connection;