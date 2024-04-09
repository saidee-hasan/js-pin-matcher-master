//Get input
let userInputShow = document.getElementById("input-show");

//function for generate random number
document.getElementById('pin-generate').addEventListener("click", function(){
    var fourDigitNumber= Math.floor(1000 + Math.random() * 9000);
    document.getElementById("pin-display").value = fourDigitNumber;
    userInputShow.value = "";
    document.getElementById("notify-match").style.display = "none";
    document.getElementById("notify-not-match").style.display = "none";
})

//function for add number beside a number in user input
const buttons = document.querySelectorAll(".number-btn");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event){
    let values = event.target.innerText;
    userInputShow.value += values;
  });
}

//delete a number from user input
document.querySelector(".delete").addEventListener("click", function(){
  userInputShow.value = userInputShow.value.slice(0, -1);
});

// All clear from user input
document.querySelector(".clear").addEventListener("click", function(){
  userInputShow.value = "";
});

//check is pin number match or not
document.querySelector(".submit-btn").addEventListener("click", function() {
  const randomNumberOutput = document.getElementById("pin-display");
    if (randomNumberOutput.value === userInputShow.value && userInputShow.value.length !== 0) {
        document.getElementById("notify-match").style.display = "block";
        document.getElementById("notify-not-match").style.display = "none";
    } else if(userInputShow.value.length === 0 || randomNumberOutput.value.length === 0){
      alert("Please Generate pin or Provide 4 digit pin number")
    } else {
      document.getElementById("notify-match").style.display = "none";
      document.getElementById("notify-not-match").style.display = "block";
    }

  // try left counter message signal
  const tryMessage = document.querySelector(".try-message");
  let tryCount = document.getElementById("try-count");
  tryCountDecrease = parseInt(tryCount.innerText) - 1;
  tryCount.innerText = tryCountDecrease;
  if (randomNumberOutput.value === userInputShow.value) {
    tryCount.innerText = 3;
  } else if (parseInt(tryCount.innerText) <= 0) {
    tryCount.innerText = 0;
    tryMessage.style.color = "red";
    document.querySelector(".submit-btn").disabled = true; //after 3 times wrong try it will disable
  }
});





