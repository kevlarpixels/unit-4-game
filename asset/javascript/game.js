// Pseudocode

//Global
var win = 0;
var losses = 0;


//input randomNumber into randomNumber id, name var cpuRandomNumber
var cpuRandom = Math.floor(Math.random() * 120) + 19;

//attach var to html id
$("#randomNumber").text(cpuRandom);


//input var for win div, name let win
$("#win").html(win);

//input var for losses div, name let losses
$("#losses").html(losses);


//name var userTotalCount
var userTotalCount = 0;

//attach var to html
$("#userTotal").text(userTotalCount);

//attach randomNumber to crystal 1-4, name var crystalOne, etc..
var crystalOne = Math.floor(Math.random() * 11) + 1;
var crystalTwo = Math.floor(Math.random() * 11) + 1;
var crystalThree = Math.floor(Math.random() * 11) + 1;
var crystalFour = Math.floor(Math.random() * 11) + 1;


//set up start of game by showing initial state of variables
function start() {
    cpuRandom = Math.floor(Math.random() * 120) + 19;
    $("#randomNumber").text(cpuRandom);
    crystalOne = Math.floor(Math.random() * 11) + 1;
    crystalTwo = Math.floor(Math.random() * 11) + 1;
    crystalThree = Math.floor(Math.random() * 11) + 1;
    crystalFour = Math.floor(Math.random() * 11) + 1;
    userTotalCount = 0;
    $("#userTotal").text(userTotalCount);
}

//set up win of game by showing state of variables
function wins() {
    alert("You win!")
    win++;
    $("#win").text(win);
    start();
}

//set up loss of game by showing state of variable
function lose() {
    alert("You lose! Try again.")
    losses++;
    $("#losses").text(losses);
    start();
}

//set up state of each crystal img on click. Include if else statement
$("#crystalOne").on("click", function () {
    userTotalCount = userTotalCount + crystalOne;
    $("#userTotal").text(userTotalCount);

    if (userTotalCount == cpuRandom) {
        wins();
    }
    else if (userTotalCount > cpuRandom) {
        lose();
    }
});

$("#crystalTwo").on("click", function () {
    userTotalCount = userTotalCount + crystalTwo;
    $("#userTotal").text(userTotalCount);

    if (userTotalCount == cpuRandom) {
        wins();
    }
    else if (userTotalCount > cpuRandom) {
        lose();
    }
});

$("#crystalThree").on("click", function () {
    userTotalCount = userTotalCount + crystalThree;
    $("#userTotal").text(userTotalCount);

    if (userTotalCount == cpuRandom) {
        wins();
    }
    else if (userTotalCount > cpuRandom) {
        lose();
    }
});

$("#crystalFour").on("click", function () {
    userTotalCount = userTotalCount + crystalFour;
    $("#userTotal").text(userTotalCount);

    if (userTotalCount == cpuRandom) {
        wins();
    }
    else if (userTotalCount > cpuRandom) {
        lose();
    }
});