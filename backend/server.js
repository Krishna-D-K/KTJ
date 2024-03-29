const express = require('express');
require('dotenv').config({path: "./passwords.env"});
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const http = require('http');
const Server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.set("strictQuery", false);
mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.dtf6756.mongodb.net/?retryWrites=true&w=majority`,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
}).then(
    Server.listen(process.env.PORT, ()=>{
        console.log("Listening on port "+ process.env.PORT);
    })
)
.catch(console.error);

