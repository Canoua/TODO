const timer = document.getElementById('timer');

const timerNumberHtml = `
  <span class="hours">00</span>
  <span>:</span>
  <span class="minutes">00</span>
  <span>:</span>
  <span class="seconds">00</span>
`
const timerNumber = `
  <div class="timer__number">${timerNumberHtml}</div>
`
const timerButtonsHtml = `
  <div class="btn-wrapper">
    <button class="start-btn btn" id="start-btn">Старт</button>
  </div>
  <div class="btn-wrapper">
    <button class="stop-btn btn" id="stop-btn" disabled>Стоп</button>
  </div>
  <div class="btn-wrapper">
    <button class="reset-btn btn" id="reset-btn" disabled>Сброс</button>
  </div>
`
const timerButtons = `
  <div class="timer__buttons">
    ${timerButtonsHtml}
  </div>
`

timer.innerHTML = `${timerNumber}${timerButtons}`