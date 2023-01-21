const express = require('express');
require('dotenv').config({path: "./passwords.env"});
const app = express();
const http = require('http');
const Server = http.createServer(app);

app.get("/", (req,res)=>{
    res.send("HELLO");
})
app.listen(process.env.PORT, ()=>{
    console.log("Listening on port "+ process.env.PORT);
})