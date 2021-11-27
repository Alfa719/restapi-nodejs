const mysql = require('mysql');

// Buat koneksi
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbrestapi'
});
connection.connect((err) => {
    if (err) throw console.error('Connection fail : ' + err);;
    console.log('Connection success');
});
module.exports = connection;