let images = document.querySelectorAll("img");
let heading = document.querySelector("h1");
let player1section= document.querySelector(".player1-section");
let player2section= document.querySelector(".player2-section");

function randomNumber(){
let random = Math.floor(Math.random() * 6) + 1;
return random;
}
let Player1 = randomNumber();
let Player2 = randomNumber();

images[0]. src= "./images/dice-" + Player1 + ".png" ;
images[1].src= "./images/dice-" + Player2 + ".png" ;

if (Player1 > Player2) {
  heading.innerHTML= "🚩Player1 Wins";
   player1section.style.backgroundColor = "brown" 

} else if (Player2 > Player1) {
    heading.innerHTML= "Player2 Wins 🏁";
    player2section.style.backgroundColor = "brown" 

}else{
   heading.innerHTML= "It's a Draw";
}