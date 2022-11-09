const mysql = require('mysql2/promise');

async function connect(){
    const connection = mysql.createConnection({
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3001
    })

    return connection.connect()
}

module.exports = {
    connect,
}