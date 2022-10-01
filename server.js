const express = require("express");
const app = express();
const path = require("path");

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

// Setting up a router function to listen on './read_more'
app.get("/read_more", function(req,res){
    res.sendFile(path.join(__dirname, "/read_more.html"));
});

// Setting up a router function to listen on './registration'
app.get("/registration", function(req,res){
    res.sendFile(path.join(__dirname, "/registration.html"));
});

// Setting up a router function to listen on './login'
app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname, "/login.html"));
});

// Setting up a router function to listen on './error'
app.get("/error", function(req,res){
    res.sendFile(path.join(__dirname, "/error.html"));
});

//Router to using images in .html giles
app.use(express.static("static"));


app.listen(HTTP_PORT, onHttpSStart);