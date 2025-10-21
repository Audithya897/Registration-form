var inputbox = document.getElementById("inputbox");

var result = document.getElementById("result");
var guesscount = document.getElementById("guesscount");


var randomnumber = Math.floor(Math.random() * 10) + 1;
if(randomnumber>5){
    randomnumber=randomnumber-5;
}



function checkthenumber() {
    if (inputbox.value == randomnumber) {
        alert( "You guessed it right!")
    }
}