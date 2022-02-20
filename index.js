const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
var cors = require('cors')

require('dotenv').config();

const app = express();
const port = process.env.PORT;
const mongo = process.env.MONGO;

app.use(cors());

mongoose.connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology:  true
});

app.use(express.json());
app.use(routes)

app.listen(port, () => console.log(`Listening on port ${port}`));