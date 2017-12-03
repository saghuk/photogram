require('babel-core/register')({
    "presets": ["es2015", "react", "stage-1"]
})


/* eslint-disable */
const compression = require("compression");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const bodyParser = require("body-parser");
const path = require("path");

const photos = require("./data/photos");
const comments = require("./data/comments");

var requestHandler = require('../requestHandler.js');
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../public')))

const port = 8080;

const router = express.Router();

// app.set('view engine', 'ejs');

// // app.use(requestHandler);
// app.use("/home", requestHandler);
// app.use(function(req, res) {
//     res.redirect('/home');
// });



// app.get("/", (req, res) => {
//     app.use(requestHandler);
// });
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public', 'noindex.html'));
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/check", (req, res) => {
    res.json({ status: "api working!!" });
});

router.route("/photos").get((req, res) => {
    res.json(photos);
    // res.json({ status: "api working!!" });
});

router.route("/comments/:photoCode").get((req, res) => {
    const comment = comments[req.params.photoCode] || [];
    res.json(comment);
});

// register routes
app.use("/api", router);

// app.get("/photos", (req, res) => {
//     res.json({ status: "api working!!" });
// });

app.listen(port, () => {
    console.log(`server started on ${port}`);
});