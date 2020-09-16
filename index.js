const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;
const dbUrl = require('./config/keys').mongoUrl;

mongoose
    .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log('Error when connecting to db : ' + err));

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/cashpoint', require('./routes/cashpoint'));

app.listen(port, () => console.log("tomcash cashpoint services is running on port " + port));