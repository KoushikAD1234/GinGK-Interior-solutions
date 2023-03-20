const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const mongodb = require('mongodb');
const cors = require('cors');
const mongoose = require('mongoose');
const { mongoDB } = require('./config');
const { LoginController } = require('./controllers');

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// console.log(mongoDB)


// Create a connection to the MongoDB database

// const url = 'mongodb+srv://koushikjio1234:9706890390@cluster0.ibfp5tj.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoDB.mongoDBUri, mongoDB.mongoDBOptions, () => {
  console.log("Connected to MongoDB 📌...");
});




// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Handle POST request to login endpoint
app.post('/', LoginController.login);

// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

// Start the server
app.listen(4000, () => {
  console.log('Server listening on port 4000');
});

// hCkM735qACYMrcG2
