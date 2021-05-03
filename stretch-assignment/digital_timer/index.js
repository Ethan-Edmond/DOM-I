let digits = document.querySelector(".digits");
let digitArray = Array.from(digits.children).filter((child) => {
  return child.id !== 'colon';
});
digitArray = digitArray.map((child) => {
  return [child, 0];
});
let timerRunning = false;
let timerInterval;

function incrementDigit (digitPair){
  if (digitPair[1] === 9){
    digitPair[1] = 0;
    digitPair[0].textContent = "0";
    return true;
  } else {
    digitPair[1] += 1;
    digitPair[0].textContent = parseInt(digitPair[1]);
    return false;
  }
}
function incrementTimer (){
  if (digitArray[0][1] !== 1){
    if(incrementDigit(digitArray[3])){
      if(incrementDigit(digitArray[2])){
        if(incrementDigit(digitArray[1])){
          incrementDigit(digitArray[0]);
          digitArray.forEach((pair) => {
            pair[0].style.color = "red";
          });
          clearInterval(timerInterval);
        }
      }
    }
  }
}
let timerButton = document.createElement("button");
timerButton.textContent = "Start Timer";
timerButton.onclick = function (){
  if (!timerRunning){
    timerInterval = window.setInterval(incrementTimer, 10);
    timerRunning = true;
  }
};
let resetButton = document.createElement("button");
resetButton.textContent = "Reset Timer";
resetButton.onclick = function (){
  digitArray.forEach((child) => {
    child[0].textContent = "-";
    child[0].style.color = "black";
    child[1] = 0;
  });
  timerRunning = false;
  clearInterval(timerInterval);
};
let buttonContainer = document.createElement("div");

// container styles

buttonContainer.style.display = "flex";
buttonContainer.style.width = "25%";

// button styles

timerButton.style.width = "50%";
timerButton.style.borderWidth = "2px";
timerButton.style.borderRadius = "6px";
timerButton.style.backgroundColor = "white";
timerButton.style.borderColor = "black";
timerButton.style.marginRight = "3px";
timerButton.style.fontFamily = "sans-serif";

resetButton.style.width = "50%";
resetButton.style.borderWidth = "2px";
resetButton.style.borderRadius = "6px";
resetButton.style.backgroundColor = "white";
resetButton.style.borderColor = "black";
resetButton.style.marginLeft = "3px";
resetButton.style.fontFamily = "sans-serif";

// digits styles
digits.style.border = "2px inset black";
digits.style.borderColor = "black";
digits.style.borderRadius = "6px";
digits.style.marginBottom = "3px";
digits.style.width = "25%";
digits.style.display = "flex";
digits.style.justifyContent = "center";
digits.style.fontFamily = "sans-serif";

document.body.style.flexDirection = "column";
document.body.append(buttonContainer);
buttonContainer.append(timerButton);
buttonContainer.append(resetButton);
