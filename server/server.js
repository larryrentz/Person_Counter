const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const people = require('./routes/api/people');

const app = express();


//Body parser Middleware
app.use(bodyParser.json());

// // DB Config
// const db = require('./config/keys').mongoURI;

// //Connect to mongo
// mongoose.connect(db)
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log(err));

app.use('api/people', people);

app.get('/', (req, res) => {
    res.json('hello!');
});

app.post('/', (req, res) => {
    console.log('incoming post');
    res.json('nice post');
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
