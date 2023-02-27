const mysql = require('mysql2');
const connection = mysql.makeConnection({
    host: 'localhost',
    user:'root',
    password:"",
    database: "staff" ,
});
connection.connect(function (err) {
    if (err) throw err;
});
module.exports = connection;