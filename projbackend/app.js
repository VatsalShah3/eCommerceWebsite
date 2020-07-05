require('dotenv').config()

const mongoose = require('mongoose');
const express = require("express");
const app = express();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true, //this will help us to keep our database alive(without this it can be done but just to be sure)
    useCreateIndex: true
})
.then(() => {
    console.log("DB CONNECTED")
});

const port = process.env.PORT || 8000; // process is where it attach all the dependencies and env is the file we created

app.listen(port, () => {
    console.log(`app is running at ${port}`);
});