//  DISPLAY CONFIRM INSTALLATION MESSAGE
alert("SCRIPT INJECTED SUCCESFULLY!")

//  EVENT HANDLER FUNCTION - INTERCEPT KEY PRESSING TO START/STOP SCRIPT
function keyshandler(event){

  //  KEY S - STOP SCRIPT - RESET COUNTERS - DISPLAY A MESSAGE
  if (event.code == "KeyS"){
    active = false;
    let message = `SCRIPT DEACTIVATED. LIKES PLACED: ${String(abslikecounter)}.`
    if (dislike) message += ` DISLIKE PLACED: ${String(absdislikecounter)}.`
    abslikecounter = 0
    absdislikecounter = 0
    alert(message)
  }

  //  KEY A - START SCRIPT - DISPLAY A MESSAGE
  if (event.code == "KeyA"){
    active = true
    alert("PRESS OK TO RE-ACTIVATE THE SCRIPT")
    click()
  }

}
//  REGISTER THE EVENT HANDLER FUNCTION
document.addEventListener('keypress', keyshandler);

//  BUTTONS VAR
var likebutton = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand D(b) Bgc(#fff) Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a")[1]
var dislikebutton = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand D(b) Bgc(#fff) Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a")[0]

//  ASKING FOR INPUT AND VARIOUS INPUT CHECKS - DELAY BETWEEN EACH LIKE
var delay
while (1){
  delay = Number(prompt("Please, enter the number of seconds that should pass between each like (it is advisable not to put less than 3): "))
  if (isNaN(delay) || delay <= 0)
    alert("The value inserted is not a number o it is lower than 1. You'll have to re-enter it.")
  else
    break
}
// CONVERTING SECONDS TO MILLISECONDS
delay *= 1000

//  ASKING FOR INPUT AND VARIOUS INPUT CHECKS - ENABLE PLACING DISLIKE
var dislike
while (1){
  dislike = Number(prompt("Please insert 1 if you want the script to place some dislikes, else insert 0: "))
  if (isNaN(dislike) || (dislike != 1 && dislike != 0))
    alert("The value inserted is not a number o it is different from 0 and 1. You'll have to re-enter it.")
  else
    break
}

//  ASKING FOR INPUT AND VARIOUS INPUT CHECKS - IF DISLIKE ARE ENABLED ASKING INPUT FOR SET UP A RATEO
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

//  SOME USEFULL COUNTERS
var abslikecounter = 0
var absdislikecounter = 0

//  FINAL MESSAGE
alert("SCRIPT START NOW! DON'T INTERACT WITH TINDER IN ANY WAY (NO CLICKS ON MATCHES OR IN OTHERS PLACES)! PRESS 'S' TO STOP IT. PRESS 'A' TO REACTIVATE IT (WITH SAME SETTINGS). TO UNISTALL PRESS 'F5'.")

//  ACTIVATE SCRIPT
var active = true
click()

//  SLEEP FUNCTION
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//  MAIN WORKING FUNCTION
async function click(){
  
  //  COUNTER TO PLACE DISLIKES
  let tmpcounter = 0

  while (active){

     // LIKE BUTTON CLICK AND UPDATE COUNTER
     likebutton.click()
     abslikecounter++
     tmpcounter++

     // IF DISLIKE ARE ENABLED - DISLIKE BUTTON CLICK AND UPDATE COUNTER
     if (dislike && dislikerateo == tmpcounter) {
      dislikebutton.click()
      absdislikecounter++
      tmpcounter = 0
     }

     // SLEEP
     await sleep(delay)
     
  }

}
