/*


Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


 */
let ok ='AM';
function printCurrentTime(){
  let currentDate = new Date();
  let hours = currentDate.getHours();
  if(hours>12){
    hours = hours-12;
    ok = 'PM';

  }


  let min = currentDate.getMinutes();
  let sec = currentDate.getSeconds();

  console.log("The current Date is: ", currentDate);

  console.log("Time is: ", hours,":",min,":",sec," ",ok);

}




 function printTime(){
    console.clear();
    printCurrentTime();
 }


 setInterval(printTime,1000);
