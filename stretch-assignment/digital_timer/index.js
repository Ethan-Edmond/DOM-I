let digits = document.querySelector(".digits");
let digitArray = Array.from(digits.children).filter((child) => {
  return child.id !== 'colon';
});
digitArray = digitArray.map((child) => {
  return [child, 0];
});
{
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
  document.body.style.flexDirection = "column";
  document.body.append(timerButton);
  document.body.append(resetButton);
}
