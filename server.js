var express = require('express');
var app = express();

app.use(
    express.static(__dirname + '/')
        );

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","http://localhost:4243");
    res.header("Access-Control-Allow-Methods","GET,POST");
                                })

app.listen(4500);
    console.log("App listening on port 4500");