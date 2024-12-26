var dice1 = false;
var dice2 = false;
var dice3 = false;
var dice4 = false;
var dice5 = false;
let dice = [];

function roll() {
  let dice1Num = Math.floor(Math.random()*6) + 1;
  let dice2Num = Math.floor(Math.random()*6) + 1;
  let dice3Num = Math.floor(Math.random()*6) + 1;
  let dice4Num = Math.floor(Math.random()*6) + 1;
  let dice5Num = Math.floor(Math.random()*6) + 1;

  if (dice1 == false) {
    document.getElementById("dice1").innerHTML = dice1Num;
  }
  if (dice2 == false) {
    document.getElementById("dice2").innerHTML = dice2Num;
  }
  if (dice3 == false) {
    document.getElementById("dice3").innerHTML = dice3Num;
  }
  if (dice4 == false) {
    document.getElementById("dice4").innerHTML = dice4Num;
  }
  if (dice5 == false) {
    document.getElementById("dice5").innerHTML = dice5Num;
  }
}

function lock1() {
  switch (dice1) {
    case false:
      dice1 = true;
      document.getElementById("dice1").style.backgroundColor = "green";
      break
    case true:
      dice1 = false;
      document.getElementById("dice1").style.backgroundColor = "";
      break
  }
}
function lock2() {
  switch (dice2) {
    case false:
      dice2 = true;
      document.getElementById("dice2").style.backgroundColor = "green";
      break
    case true:
      dice2 = false;
      document.getElementById("dice2").style.backgroundColor = "";
      break
  }
}
function lock3() {
  switch (dice3) {
    case false:
      dice3 = true;
      document.getElementById("dice3").style.backgroundColor = "green";
      break
    case true:
      dice3 = false;
      document.getElementById("dice3").style.backgroundColor = "";
      break
  }
}
function lock4() {
  switch (dice4) {
    case false:
      dice4 = true;
      document.getElementById("dice4").style.backgroundColor = "green";
      break
    case true:
      dice4 = false;
      document.getElementById("dice4").style.backgroundColor = "";
      break
  }
}
function lock5() {
  switch (dice5) {
    case false:
      dice5 = true;
      document.getElementById("dice5").style.backgroundColor = "green";
      break
    case true:
      dice5 = false;
      document.getElementById("dice5").style.backgroundColor = "";
      break
  }
}
