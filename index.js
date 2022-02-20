const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
var cors = require('cors')

require('dotenv').config();

const app = express();
const port = (process.env.PORT || 3333);
const mongo = process.env.MONGO;

app.use(cors());

mongoose.connect('mongodb+srv://Womakers:Womakers@cluster0.elgva.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:  true
});

app.use(express.json());
app.use(routes)

app.listen(port, () => console.log(`Listening on port ${port}`));