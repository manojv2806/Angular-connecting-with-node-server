

const { strict } = require('assert');
var express=require('express');
var app = express();

var routes = require('./routes/route1');
app.use('/test', routes);
app.use(express.static("myApp")); // myApp will be the same folder name.


app.listen(3030, () => {
    console.log('App listening on port 3030');
});


