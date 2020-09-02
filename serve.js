const express = require("express");
const app = express();
const server = require('http').Server(app);

// we dont have to import ejs but tell your app that, view engine is going to be ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.status(200).send("Hello World");
    res.render('room');
})


server.listen(3030);