
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
const button = document.getElementById("button");
const chair = document.getElementById("chair");
const brokenchair = document.getElementById("brokenchair");

const errorMessage = document.getElementById("guide");


let hasHammer = false;
hideMan();
hideFriend();
showHammer();
hideTwo();
hidegateTextInfo();
hideButton();
hideChair();
hideBrokenchair();




let hasTwo = false;
showTwo
showButton

let hasChair = false;
let hasBrokenchair = false;





function hideHammer(){
    hammer.hidden = true;
}

function showHammer(){
    if (hasHammer) {
        hammer.hidden = false;
}
}

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
        showButton();
        
    }

}
)

LockBox.addEventListener("click", function() {
    showGateTextinfo();
}
)

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

function hideButton(){
    button.hidden = true;
}

function showButton (){
    button.hidden = false;
}

button.addEventListener("click", function () {
    let rand = Math.floor(Math.random() * 2) + 1;
    if (rand == 2){
        hasBrokenchair = true;
        showBrokenchair();
        hideChair();
        hideButton();
        showRandomscreen();
        showBrokenchair(
           "Oh no, the chair wasn't built correctly and is now broken..."
        );
    } else {
        hasChair = true;
        showChair();
        hideBrokenchair();
        hideButton();
        hideRandomscreen();
        showChair(
            "Good job! The chair was built correctly!"
        );
    
    }
});


function hideChair(){
    chair.hidden = true;
    
}

function showChair(){
    if (hasChair){
    chair.hidden = false;
    }
}

function hideBrokenchair(){
    brokenchair.hidden = true;
    
}

function showBrokenchair(){
    if (hasBrokenchair){
    brokenchair.hidden = false;
    }
}