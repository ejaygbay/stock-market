var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})
app.listen(3000, function(err){
    if(err) throw err;
    else
    console.log("App is listening on port 3000");
});
