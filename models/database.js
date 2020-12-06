const mysql = require("mysql");

//create database connection
const conn = mysql.createConnection({
    host: "sql2.freemysqlhosting.net", 
    user: "sql2379672", 
    password: "hU7!xA3%", 
    database: "sql2379672"
    //multipleStatements: true
});

//connect to database
conn.connect((err) => {
    if (err) throw err;
    console.log("Connected...");
});

setInterval(function() {
    conn.query("SELECT 1");
}, 5000);
module.exports = conn;