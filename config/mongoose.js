const mongooose = require('mongoose');

mongooose.connect('mongodb://localhost/Hospital_API');

const db = mongooose.connection;

db.on('error', console.error.bind(console, "Error connecting to DB"));

db.once('open', function () {
  console.log('Connected to Database :: MongoDB');
});

module.exports = db;