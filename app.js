const express   = require('express');
const app       = express();          
const http      = require('http'); 
const server    = http.createServer(app);  
const PORT      = 8080; 
 
server.listen(PORT);

//default directory
app.use ( express.static(__dirname + '/public') );

//print port number to terminal
console.log("Listening to port: " + PORT);

//set route(s)
app.get('/', function (req, res){
    res.sendFile(__dirname + '/public/index.html');
});