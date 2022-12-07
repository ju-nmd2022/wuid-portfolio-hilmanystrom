
const orderButton = document.getElementById("order")
const orderDetails = document.getElementById("orderDetails")
// const payButton = document.getElementById("payButton")
// const finishPage = document.getElementById("finishPage")

let hasOrderDetails = false;
let hasOrderButton = false;
hideOrderDetails();
showOrderButton();
// hideFinishPage();

// let hasPayButton = false;
// hideFinishPage();


orderButton.addEventListener("click", function() {
    if (!hasOrderButton) {
        hasOrderButton = true;
        showOrderDetails();
        hideOrderButton();
    }
})

orderDetails.addEventListener("click", function() {
    if (!hasOrderDetails) {
    hasOrderDetails = false;
    showOrderButton();
    hideOrderDetails();
   }
})

orderDetails.addEventListener("click", function() {
 if (!hasOrderDetails) {
 hasOrderDetails = true;
 showOrderDetails();
 }
})

// payButton.addEventListener("click", function() {
//     if (!hasPayButton) {
//     hasPayButton = false;
//    showOrderDetails();
//    hideFinishPage();
//     }
// })

// payButton.addEventListener("click", function() {
//     if (!hasPayButton) {
//     hasPayButton = true;
//     showFinishPage();
//     hideOrderDetails();
//     }
// })




function hideOrderDetails() {
    orderDetails.hidden = true;
}

function showOrderDetails() {
    orderDetails.hidden = false
}

function hideOrderButton() {
    orderButton.hidden = true;
}

function showOrderButton() {
    orderButton.hidden = false;
}

// function hideFinishPage() {
//     finishPage.hidden = true;
// }

// function showFinishPage() {
//     finishPage.hidden = false;
// }

// function hidePayButton() {
//     payButton.hidden = true;
// }

// function showPayButton() {
//     payButton.hidden = false;
// }