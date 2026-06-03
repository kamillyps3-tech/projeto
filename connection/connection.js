const mysql = require ("mysql")

const connection = mysql.createConnection({
    socketPath: "/var/run/mysqld/mysqld.sock",
    //host: "localhost",
    port: 3306,
    user: "dev_user",
    password: "123",
    database: "Crud"
})

module.exports = connection

