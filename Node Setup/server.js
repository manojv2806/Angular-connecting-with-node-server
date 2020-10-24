

const { strict } = require('assert');
var express=require('express');
var app = express();

var routes1 = require('./routes/route1');
var routes2 = require('./routes/route2');
app.use('/test1', route1); // url with test 1 goes to route1
app.use('/test2', route2);// url with test 2 goes to route2

app.use(express.static("myApp")); // myApp will be the same folder name.


app.listen(3030, () => {
    console.log('App listening on port 3030');
});


