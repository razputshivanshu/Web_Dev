const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');






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

app.use(bodyParser.json());



// function middlewar1(req,res,next){
//   next();
//   }


// app.use(middlewar1);



function handleFirstReq(req,res){
  // var counter = req.query.counter;
  // var counter = req.headers.counter;
  console.log(req.body);
  // console.log(req.headers);
  var calculatedSum = sum(counter);
  // console.log(calculatedSum);
  var Answer = "the sum is: "+calculatedSum;
  res.send(Answer);
}



function createUser(req,res){
  console.log("User has been created!!!!");
}

app.post('/handleSum', handleFirstReq);


// app.post('/handleSum', handleFirstReq);


function started(){
  console.log(`Example app listening on port ${port}`);
}


app.listen(port,started);












