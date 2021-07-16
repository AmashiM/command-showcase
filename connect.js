const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

app.listen(8679, () => {
  console.log("Listening . . .")
  mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(console.log('Connected To Mongo'))
  .catch(console.log);
});




