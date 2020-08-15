var express = require("express");
var server = express();


server.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

server.use(express.static(__dirname));

server.listen(process.env.PORT || 3000, function(){
    console.log("server is running on");
});
