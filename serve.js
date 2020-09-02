const express = require("express");
const app = express();
const server = require('http').Server(app);

// yarn add uuid
// import uuid to create a unique ID for every room
const {
    v4: uuidv4
} = require('uuid');


app.set('view engine', 'ejs');


// redirecting root folder 
// when you go to localhost you get redirected to the below get With generated UID
app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`);
})


// To generate a new URL
// :room -> think of this as a number(ID) 
// Instead of rendering from above we are rendering here "room" and passing it some parameter "roomID"
// we get our parameter from above get 
app.get('/:room', (req, res) => {
    res.render('room', {
        roomID: req.params.room
    })
})

// Now we are going to pass this roomID to room.ejs



server.listen(3030);