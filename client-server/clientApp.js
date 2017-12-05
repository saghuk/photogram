/*Name - clientApp
 * Description - Shares routes between server and client
 * Author - Sagar Hukkeri 
 */

require('babel-register')({
    "presets": ["es2015", "react", "stage-1"]
})

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
var requestHandler = require('./requestHandler.js');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../public')))

const port = 3000;

/**sets view engine */
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/**use middleware request handler*/
app.use(requestHandler);


app.listen(port, () => {
    console.log(`server started on ${port}`);
});