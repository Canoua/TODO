//логика: 
//- если доходят до крайней цифры, то обнуляем и добавляем +1 к следующему разряду
const start = document.getElementById('start-btn');
let seconds = document.querySelector('.seconds');
let minutes = document.querySelector('.minutes');
let hours = document.querySelector('.hours');

function timer() {
  let secondsCounter = 0;

  function timeIncrement() {
    secondsCounter = secondsCounter+1; 
    seconds.innerHTML = secondsCounter;

    if(secondsCounter == 59) {
      secondsCounter = -1;
    }
  }
  setInterval(timeIncrement, 1000)
}

start.addEventListener('click', timer);