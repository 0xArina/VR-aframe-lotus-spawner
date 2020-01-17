const express   = require('express'); //create constant called express 
                                    //equals to text of class?
                                    //get that code
const app       = express();          //initialize 
const http      = require('http');   //go get it
const server    = http.createServer(app);      //initialize
const PORT      = 1111; //which prt is our context servedf by (default:80)
 
server.listen(PORT);
//our default directory
app.use ( express.static(__dirname + '/public') );

//print to terminal i.e. court, printf
console.log("Listening to port" + PORT);

//set our route(s)
app.get('/', function (req, res){
    res.sendFile(__dirname + '/public/index.html');
});