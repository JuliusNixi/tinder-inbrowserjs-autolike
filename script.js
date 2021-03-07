console.log("SCRIPT INJECTED SUCCESFULLY!")
alert("SCRIPT INJECTED SUCCESFULLY!")

function keyshandler(event){

  if (event.code == "KeyS"){
    active = false;
    console.log("SCRIPT DEACTIVATED")
    alert("SCRIPT DEACTIVATED")
  if (event.code == "KeyA"){
    active = true
    console.log("PRESS OK TO RE-ACTIVATE THE SCRIPT")
    alert("SCRIPT ACTIVATED")
    click()
  }

}
document.addEventListener('keypress', keyshandler);

var likebutton = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand D(b) Bgc(#fff) Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a")[1]
var dislikebutton = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand D(b) Bgc(#fff) Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a")[0]

var delay
while (1){
  delay = Number(prompt("Please, enter the number of seconds that should pass between each like (it is advisable not to put less than 3): "))
  if (isNaN(delay) || delay <= 0)
    alert("The value inserted is not a number o it is lower than 1. You'll have to re-enter it.")
  else
    break
}
delay *= 1000

var dislike
while (1){
  dislike = Number(prompt("Please insert 1 if you want the script to place some dislikes, else insert 0: "))
  if (isNaN(dislike) || (dislike != 1 && dislike != 0))
    alert("The value inserted is not a number o it is different from 0 and 1. You'll have to re-enter it.")
  else
    break
}

if (dislike){
  var dislikerateo
  while (1){
    dislikerateo = Number(prompt("Please enter, every how many likes, a dislike will be placed: "))
    if (isNaN(dislikerateo) || dislikerateo <= 0)
      alert("The value inserted is not a number o it is lower than 1. You'll have to re-enter it.")
    else
      break
  }
}

console.log("SCRIPT START NOW! DON'T INTERACT WITH TINDER IN ANY WAY (NO CLICKS ON MATCHES OR IN OTHERS PLACES)! PRESS 'S' TO STOP IT. PRESS 'A' TO REACTIVATE IT (WITH SAME SETTINGS). TO UNISTALL PRESS 'F5'.")
alert("SCRIPT START NOW! DON'T INTERACT WITH TINDER IN ANY WAY (NO CLICKS ON MATCHES OR IN OTHERS PLACES)! PRESS 'S' TO STOP IT. PRESS 'A' TO REACTIVATE IT (WITH SAME SETTINGS). TO UNISTALL PRESS 'F5'.")
var active = true

click()

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function click(){
  
  let abslikecounter = 0
  let absdislikecounter = 0
  let tmpcounter = 0
  while (active){

     likebutton.click()
     abslikecounter++
     tmpcounter++
     if (dislike && dislikerateo == tmpcounter) {
     	dislikebutton.click()
     	absdislikecounter++
     	tmpcounter = 0
     }
     await sleep(delay)
     
  }

}
