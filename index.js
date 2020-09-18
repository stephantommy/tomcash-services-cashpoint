const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const key = require(path.join(__dirname, '/config/keys'));
const host = key.host;
const port = key.port;
const dbUrl = key.mongoUrl;
const app = express();

mongoose
    .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log('Error when connecting to db : ' + err));

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/cashpoint', require('./routes/cashpoint'));

app.listen(port, host, () => console.log("tomcash cashpoint services is running on port " + port));