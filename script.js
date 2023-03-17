function getPin() {
  const random = Math.random() * 10000;
  const pin = (random + "").split(".")[0];
  if (pin.length === 4) return pin;
  else return getPin();
}

function generatePin() {
  const genPin = document.getElementById("gen-btn");
  genPin.addEventListener("click", function () {
    //display pin
    const pinInput = document.getElementById("pin");
    pinInput.value = getPin();
  });
}

generatePin();

//handle calculator button events
const buttonContainer = document.getElementById("digit-container");
buttonContainer.addEventListener("click", function (event) {
  const digit = event.target.innerText;
  if (isNaN(digit)) {
    //handle backspace
    if (digit === "<") {
      const typedPin = document.getElementById("typed-pin");
      typedPin.value = typedPin.value.slice(0, -1);
    }
    //handle clear
    else if (digit == "C") {
      const typedPin = document.getElementById("typed-pin");
      typedPin.value = "";
    }
  } else {
    console.log(digit);
    const typedPin = document.getElementById("typed-pin");
    typedPin.value += digit;
  }
});
function verifyPin() {
  const pin = document.getElementById("pin").value;
  const typedPin = document.getElementById("typed-pin").value;

  if (pin === typedPin) {
    const correctMsg = document.getElementById("correct");
    correctMsg.style.display = "block";
  } else {
    const incorrectMsg = document.getElementById("incorrect");
    incorrectMsg.style.display = "block";

    let actLeft = parseInt(document.getElementById("act-left").innerText);
    console.log(actLeft);
    if (actLeft > 0) {
      document.getElementById("act-left").innerText = --actLeft;
    }
  }
}
