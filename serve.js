const express = require("express");
const app = express();
const server = require('http').Server(app);

// This is where my app lives
app.get('/', (req, res) => {
    res.status(200).send("Hello World");
})

// server is local host and port is 3030
server.listen(3030);

// Now run nodemon serve.js and in chrome go to localhost:3030