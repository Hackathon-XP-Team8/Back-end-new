const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
// var cors = require('cors')

require('dotenv').config();

const app = express();
const port = (process.env.PORT || 3333);
const mongo = process.env.MONGO;

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoose.connect('mongodb+srv://Womakers:Womakers@cluster0.elgva.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:  true
});

app.use(express.json());
app.use(routes)

app.listen(port, () => console.log(`Listening on port ${port}`));
