
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
const hammer = document.getElementById("hammer");
const change = document.getElementById("confused");
const friend = document.getElementById("friend");
const two = document.getElementById("two");
const lockBox = document.getElementById("lockbox");
const gateTextinfo = document.getElementById("gateTextInfo");
const uppertext = document.getElementById("text");

const errorMessage = document.getElementById("guide");


let hasHammer = false;
hideMan();
hideFriend();
showHammer();
hideTwo();
hidegateTextInfo();



let hasTwo = false;
showTwo




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