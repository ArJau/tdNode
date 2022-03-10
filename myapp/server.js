var express = require('express');
var app = express();

app.use('/html', express.static(__dirname+"/html"));
app.use('/js', express.static(__dirname+"/js"));
app.get('/', function(req , res ) {
  res.redirect('/html/index.html');
});

let backendPort = process.env.PORT || 8282; 
app.listen(backendPort , function () {
  console.log("http://localhost:"+backendPort);
});