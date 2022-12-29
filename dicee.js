var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"


var  randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"

 document.querySelector(".img1").setAttribute("src" , randomDiceImage1);
 document.querySelector(".img2").setAttribute("src" , randomDiceImage2);


if(randomNumber1 == randomNumber2)
{
  document.querySelector("h1").innerHTML = "It's A Tie"
}
else if(randomNumber1 >randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player1 Won 🏆"
}
else
{
  document.querySelector("h1").innerHTML = "Player2 Won 🏆";
}
