/*clientServer - Initializes client server for server side rendering
 * Description - Shares routes between server and client
 * Author - Sagar Hukkeri 
 */

require('babel-register')({
    "presets": ["es2015", "react", "stage-1"]
})



/* eslint-disable */
// const compression = require("compression");
const express = require("express");

const app = express();
// const http = require("http").Server(app);
const bodyParser = require("body-parser");
const path = require("path");

// const photos = require("./data/photos");
// const comments = require("./data/comments");

var requestHandler = require('./requestHandler.js');
// app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'public')))

const port = 3000;

const router = express.Router();

app.set('view engine', 'ejs');

app.use(requestHandler);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(port, () => {
    console.log(`server started on ${port}`);
});