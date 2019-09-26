const updateClock = function () {
    //I've called the current date
    const currentTime = new Date();
    //Next, I've called the necessary information for my code
    const currentHour = currentTime.getHours();
    const currentMin = currentTime.getMinutes();
    const currentSec = currentTime.getSeconds();
    //here I have created a string to print out the time

    var currentTimeString = numToString(currentHour) + " : " +
        numToString(currentMin) + " : " + numToString(currentSec);

    const print = document.getElementById("clock");
    clock.innerText = currentTimeString;
}

//this is the function used to check if the number is less than 10 to add zeroes to add
//to the printed time above
var numToString = function (num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return num;
    }
};


var min = '--';
var sec = '--';

var interval;

var button = document.getElementById(button__time);
button__time.onclick = function () {
    min = document.getElementById("minutesInput").value;
    sec = document.getElementById("secondsInput").value;

    interval = setInterval(function() {
        countDown()
    }, 1000);

    
}   

// Put the number in to a string on countdown
function countDown() {
    tick();
    var countDownString = numToString(min) + " : " +
        numToString(sec);
    const printTimer = document.getElementById("timer");
    timer.innerText = countDownString;
}

//This function subtracts one on each refresh 
function tick() {
    if (sec > 0) {
        sec--;
    } else if (min > 0) {
        sec = 59;
        min--;
    } else if (min <= 0 && sec <= 0){
         var audio = new Audio('17.mp3');
         audio.play();
         clearInterval(interval)
        //alert();
   } else {

   }
}