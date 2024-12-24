function roll() {
  let dice1Num = Math.floor(Math.random()*6) + 1;
  let dice2Num = Math.floor(Math.random()*6) + 1;
  let dice3Num = Math.floor(Math.random()*6) + 1;
  let dice4Num = Math.floor(Math.random()*6) + 1;
  let dice5Num = Math.floor(Math.random()*6) + 1;

  document.getElementById("dice1").innerHTML = dice1Num;
  document.getElementById("dice2").innerHTML = dice2Num;
  document.getElementById("dice3").innerHTML = dice3Num;
  document.getElementById("dice4").innerHTML = dice4Num;
  document.getElementById("dice5").innerHTML = dice5Num;
}