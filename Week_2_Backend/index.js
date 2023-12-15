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


function mul(counter){
  let muli=1;
  for(let i=1;i<=counter;i++){
    muli*=i;
  }

  return muli;

}







const app = express()
const port = 3000

app.use(bodyParser.json());
//this is used to read from the body.



// function middlewar1(req,res,next){
//   next();
//   }


// app.use(middlewar1);



function handleFirstReq(req,res){
  // var counter = req.query.counter;
  // var counter = req.headers.counter;
  // console.log(req.body);
  // console.log(req.headers);

  var counter = req.body.counter;

  if(counter<1000000){
  
  var calculatedSum = sum(counter);
  var multiplication = mul(counter);



  var answerObject = {
    sum: calculatedSum,
    multi: multiplication
  }

  // console.log(calculatedSum);
  var Answer = "the sum is: "+calculatedSum;
  // res.status(404).send(Answer);
  // res.send(Answer);
  res.send("Json Answer of sum is:   " + answerObject.sum + "\n" + "Json answer multiplication is:  " + answerObject.multi);
  // res.send("Json file Aswer is: " + answerObject);
 
  }
  else{
    res.status(404).send("error occured!!! The input number is too large.");
  }
}



function createUser(req,res){
  console.log("User has been created!!!!");
}

function givePage(req,res){
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning Express</title>
  </head>
  <body>
  
    <h1>I have to focus more on learning</h1>
    
  </body>
  </html>`);

}





app.get('/handleSum', handleFirstReq);
app.get('/', givePage);





function started(){
  console.log(`Example app listening on port ${port}`);
}


app.listen(port,started);












