const promiseOne = new Promise(function(resolve,reject){
  //Do an async task.
  //Db calls
  //Cryptography tasks
  //Network calls
  setTimeout(function(){
    console.log("I love javascript");
    resolve();
  },1000);
});
//A promise is declared.


//Now time to consume a promise.
promiseOne.then(function(){
  console.log("Promise consumed");
})



// Part 2 in sorted manner
new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Async Task 2");
    resolve();
  },1000)
}).then(function(){
  console.log("Async 2 resolved");
});



// Promise 3

const promiseThree = new Promise(function(resolve, reject){
// write function here

  setTimeout(function(){
    resolve({username:"chai",email:"chai@example.com"})
  },1000)
});

promiseThree.then(function(user){
  console.log(user);
  
});



// Fourth Promise

const promiseFour = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true;
    if(!error){
      resolve({username:"shivanshu",password:"123"})
    }
    else{
      reject('ERROR: Something went wrong');
    }
  },2000)
})

promiseFour
.then((user)=>{
  console.log(user);
  return user.username
})
.then((usermame)=>{
  console.log(usermame);
})
.catch(function(error){
  console.log(error);
})
.finally(()=>{
  console.log("The promise is either resolved or rejected!!!");
});




//Promise Five

const promiseFive = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true; //if here is true than async awiat don't have catch alternate so it will through an error
    if(!error){
      resolve({username:"Javascript",password:"12355434"})
    }
    else{
      reject('ERROR:JS went wrong');
    }
  },1000)
});


//You can handle promises by multiple methods like then catch finally or async or await.


async function consumePromiseFive(){
  // const response=await promiseFive
  // console.log(response);

  try{
    const response = await promiseFive;
    console.log(response);
  }
  catch(error){
    console.log(error);
  }


}

consumePromiseFive()


//The main issue with async await is that it can not handle the errors directly.


//Writing code using Async try and catch
// async function getAllUsers(){
//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response);


//     const data =await response.json()
//     console.log(data);
//   }
//   catch(error){
//     console.log("E: ", error);
//   }
// }
// getAllUsers()
////---- writing the smae code in try catch format:

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json();
})
.then((data)=>{
  console.log(data);
})
.catch((error)=>{ console.log(error)})

