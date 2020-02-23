const mongoose = require('mongoose');
let schema = require('./schema.js');
const db = mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.on('error', () => {
  console.log('Error connecting to database')
})

connection.once('open', () => {
  console.log('You\'ve connected to your database');
})

module.exports.schema = schema;


