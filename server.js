var express = require("express");
var app = express();
var path = require("path");

var HTTP_PORT = process.env.port || 8080;

function onHttpSStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}

//setting up a initial router function to listen on '/'
app.get("/", function(req,res){
res.sendFile(path.join(__dirname, "/index.html"));
});

//setting up a router function to listen on './blog'
app.get("/blog", function(req,res){
res.sendFile(path.join(__dirname, "/blog.html"));
});

//Router to using images in .html giles
app.use(express.static("static"));


app.listen(HTTP_PORT, onHttpSStart);