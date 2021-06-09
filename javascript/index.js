const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime(minutes, seconds) {
  printMinutes()
  printSeconds()
}
 

function printMinutes(minutes) {
  if (chronometer.currentTime < 600) {
    minDec.innerText = 0;
    minUni.innerText = chronometer.getMinutes();
  } else {
    let time = chronometer.getMinutes().toString();
    let minutesDec = time.charAt(0);
    let minutesUni = time.charAt(1);
    minDec.innerHTML = Number(minutesDec);
    minUni.innerHTML = Number(minutesUni);
  }
}

function printSeconds(seconds) {
  if (chronometer.currentTime < 10) {
    secDec.innerText = 0;
    secUni.innerText = chronometer.getSeconds();
  } else {
    let time = chronometer.getSeconds().toString();
    let secondsDec = time.charAt(0);
    let secondsUni = time.charAt(1);
    secDec.innerHTML = Number(secondsDec);
    secUni.innerHTML = Number(secondsUni);
  }
}

// ==> BONUS
function printMilliseconds(miliseconds) {
  
}

function printSplit(time) {
  let splitValue=document.createElement("li");
  splitValue.innerHTML=newChrono.split();
  parent.appendChild(splitValue);
 
  }

function clearSplits() {
  newChrono.reset();
   parent.textContent = '';
  
}

function setStopBtn() {
  btnLeftElement.setAttribute("class","btn stop");
  btnLeftElement.innerHTML="STOP";
  
}

function setSplitBtn() {
  btnRightElement.setAttribute("class","btn split");
  btnRightElement.innerHTML="SPLIT";
  
}

function setStartBtn() {
  btnLeftElement.setAttribute("class","btn start");
    btnLeftElement.innerHTML="START";
  
}

function setResetBtn() {
  btnRightElement.setAttribute("class","btn reset")
    btnRightElement.innerHTML="RESET";
}
  

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.className==="btn start")
  { 
    setStopBtn();
    setSplitBtn();
    newChrono.start();
    printTime();
  }
  else
  { 
    setStartBtn();
    setResetBtn();
    newChrono.stop();
  }
  });


// Reset Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.className === "btn reset")
  {
    if (btnLeft.className === "btn start") {chronometer.resetClick();}
  } else {
    chronometer.splitClick();
    printSplit()
  }
});

