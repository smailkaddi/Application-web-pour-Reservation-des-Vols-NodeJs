const mysql = require('mysql');

// database connection 
const database = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Flight_Booking',
    debug: false,
    multipleStatements: true
  });
  
  // connect to database
  database.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected!!!');
  });
  

  module.exports = database;