const mongoose = require('mongoose');

const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_DBNAME = process.env.MONGO_DBNAME || 'videostore';
const MONGO_USER = process.env.MONGO_USER || null;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || null;

const QUEARY_STRING = MONGO_USER ?
`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`
:
`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`; 

// Connection to DB
const db = mongoose.connect(QUEARY_STRING,{useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('Connected to Database'))
.catch((error) => console.log(error));

module.exports = db;