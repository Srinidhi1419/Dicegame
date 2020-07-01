//My Own Code FOr Dice
//For First Dice

let randomNumber1=Math.floor(Math.random()*6)+1;
if(randomNumber1===1){
document.querySelector(".img1").setAttribute("src","images/dice1.png");
} else if(randomNumber1===2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png"); 
 } else if(randomNumber1===3){
     document.querySelector(".img1").setAttribute("src","images/dice3.png"); 
 } else if(randomNumber1===4){
     document.querySelector(".img1").setAttribute("src","images/dice4.png"); 
 } else if(randomNumber1===5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png");  
 } else{
    document.querySelector(".img1").setAttribute("src","images/dice6.png"); 
 }

 //For First Dice

let randomNumber2=Math.floor(Math.random()*6)+1;
if(randomNumber2===1){
document.querySelector(".img2").setAttribute("src","images/dice1.png");
} else if(randomNumber2===2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png"); 
 } else if(randomNumber2===3){
     document.querySelector(".img2").setAttribute("src","images/dice3.png"); 
 } else if(randomNumber2===4){
     document.querySelector(".img2").setAttribute("src","images/dice4.png"); 
 } else if(randomNumber2===5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");  
 } else{
    document.querySelector(".img2").setAttribute("src","images/dice6.png"); 
 }

 //for Announcing Winner

 if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Hurray!!! Player1 Wins...Refresh Me Again";
 } else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Hurray!!! Player2 Wins...Refresh Me Again";
 } else{
    document.querySelector("h1").textContent="Hurray!!! It's Draw for you two...Refresh Me Again";
 }