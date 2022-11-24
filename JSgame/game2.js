
//   var modal = document.getElementById("myModal");

//  var img = document.getElementById("list");

//   var modalImg = document.getElementById("Img01");

// var captionText = document.getElementById("caption");
//  img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// var span = document.getElementsByClassName("close")[0];

//  span.onclick = function() {
//    modal.style.display = "none";
//   }


const ikeaman = "ikea-man.jpeg";
const confusedIkea = "confusedikea.jpeg";
const kompis = "friend.jpeg";
const kompisar = "ikeafriend.png";
const stol = "chair.jpeg";
const trasigstol = "brokenchair.jpeg";
const hammer = document.getElementById("hammer");
const change = document.getElementById("confused");
const friend = document.getElementById("friend");
const two = document.getElementById("two");
const lockBox = document.getElementById("lockbox");
const gateTextinfo = document.getElementById("gateTextInfo");
const uppertext = document.getElementById("text");
const randomButton = document.getElementById("button");
const chair = document.getElementById("chair");
const brokenchair = document.getElementById("brokenchair");
const gameover = document.getElementById("gameover")
const gamefinished = document.getElementById("gamefinished");

const hamer = "hammer";

let hasHammer = false;
hideMan();
hideFriend();
showHammer();
hideTwo();
hidegateTextInfo();
hideRandomButton();
hideChair();
hideBrokenchair();
hideGameover();
hideGamefinished();

let hasTwo = false;
showTwo
showRandomButton



randomButton.addEventListener("click", function () {
    rand = Math.floor(Math.random() * 2) + 1;
   if (rand === 2) {
       showBrokenchair();
       showGameover();
       hideChair();
       hideGamefinished();
       } else {
       showChair();
       showGamefinished();
       hideBrokenchair();   
       hideGameover();
   }
});


function hideHammer(){
    hammer.hidden = true;
}

function showHammer(){
    if (hasHammer) {
        hammer.hidden = false;
}}

function changePicture() {
    if (hasHammer){
        hideHammer();
        showMan();
        
    }
}

hammer.addEventListener("click", function () {

    if (!hasHammer) {
        hasHammer = true;
        hideHammer();
        saveSession();
        changePicture();
        showFriend();
        showGateTextinfo();
        hideText();
        hideButton();
        return;
    }
})

function hideMan(){
    change.hidden = true;
}

function showMan(){
        change.hidden = false;
    
}

function hideFriend(){
    friend.hidden = true;
}

function showFriend(){
    friend.hidden = false;
}

function hideTwo(){
    two.hidden = true;
}

function showTwo(){
    two.hidden = false;
}

console.log(friend);

friend.addEventListener("click", function (){
    if (!hasTwo){
        hasTwo = true;
        showTwo();
        hideFriend();
        hidegateTextInfo();
        showRandomButton();
        
    }
})

LockBox.addEventListener("click", function() {
    showGateTextinfo();
})

function hidegateTextInfo(){
    gateTextinfo.style.display = "none";
}

function showGateTextinfo(){
    gateTextinfo.style.display = "flex";
}

function hideLockBox(){
    lockBox.style.display = "none";
}

function showlockBox(){
    lockBox.style.display = "flex";
}

function hideText(){
    text.style.display = "none";
}

function showText(){
    text.style.display = "flex";
}

function hideRandomButton(){
    button.hidden = true;
}

function showRandomButton (){
    button.hidden = false;
}

function hideRandomButton(){
    randomButton.hidden = true;
}

function showRandomButton(){
    randomButton.hidden = false;
}

function hideChair() {
    chair.hidden = true;
}

function showChair() {
    chair.hidden = false; 
}

function hideBrokenchair() {
    brokenchair.hidden = true;    
}

function showBrokenchair() {
    brokenchair.hidden = false;
}

function hideGameover() {
    gameover.hidden = true;
}

function showGameover() {
    gameover.hidden = false;
}

function hideGamefinished() {
    gamefinished.hidden = true;
}

function showGamefinished() {
    gamefinished.hidden = false;
}

function saveSession() {
    sessionStorage.setItem(hamer, hasHammer.toString());
}

function getPreviousSession() {
    let hasHammerValue = sessionStorage.getItem(hamer);
    hasHammer = hasHammerValue === "true";
    if (hasHammer) {
        hideHammer();
    }}