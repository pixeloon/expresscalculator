var express = require('express'); 
var app = express();

app.get("/add/:num1/:num2",function(req, res){
  res.sendStatus(Number(req.params.num1) + Number(req.params.num2) );

});
app.get("/sub/:num1/:num2",function(req, res){
  res.sendStatus(Number(req.params.num1) - Number(req.params.num2) );

});
app.get("/mult/:num1/:num2",function(req, res){
  res.sendStatus(Number(req.params.num1) * Number(req.params.num2) );

});
app.get("/div/:num1/:num2",function(req, res){
  res.sendStatus(Number(req.params.num1) / Number(req.params.num2) );

});

app.listen(3000, function() {
  console.log("Listening on localhost:3000....");
});