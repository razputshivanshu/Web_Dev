const fs = require('fs');
const express = require('express');


let counter =100;

function sum(counter){
  let sumi=0;
  for(let i=0;i<=counter;i++){
    sumi+=i;
  }

  return sumi;

}

console.log(sum(counter));





const app = express()
const port = 3000

function handleFirstReq(req,res){
  var counter = req.query.counter;
  var calculatedSum = sum(counter);
  // console.log(calculatedSum);
  var Answer = "the sum is: "+calculatedSum;
  res.send(Answer);
}


function createUser(req,res){
  console.log("User has been created!!!!");
}

app.get('/handleSum', handleFirstReq);
app.post('/createUser',createUser);

function started(){
  console.log(`Example app listening on port ${port}`);
}


app.listen(port,started);












