const mysql = require('mysql');

const config = require('../config/config');

const con = mysql.createConnection(config.development);

con.connect((err) => {
  if (err) throw err;
});

module.exports = con;
