const start = document.getElementById('start-btn');
const stop = document.getElementById('stop-btn');
const reset = document.getElementById('reset-btn');
let seconds = document.querySelector('.seconds');
let secondsCounter = 0;
let minutes = document.querySelector('.minutes');
let hours = document.querySelector('.hours');
let minutesCounter = 0;
let hoursCounter = 0;

function removeAttribute(block) {
  block.removeAttribute('disabled', 'disabled');
}

function timer() {
  function timeIncrement() {  
    secondsCounter = secondsCounter+1; 
    if(secondsCounter == 59) {
      secondsCounter = -1;
    } else 
    if(secondsCounter>=0 && secondsCounter<10) {
      seconds.innerHTML = `0${secondsCounter}`
    }
  }
  start.setAttribute('disabled', 'disabled');
  
  //удаляем аттрибут disabled 
  removeAttribute(stop);
  removeAttribute(reset);
  setInterval(timeIncrement, 1000); 


  // int();
   

  // reset.addEventListener('click', () =>{
  //   console.log('timereset');
  //   clearInterval(int);
  // });
}


function timeStop() {
  console.log('timestop');
}

start.addEventListener('click', timer);
stop.addEventListener('click', timeStop);
