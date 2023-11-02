import './../scss/commons.scss';

// timer
// import './components/timer/timer.js';
// import './components/timer/script.js';

// todo
import todoHtml from './components/todo/todoHtml/todoHtml';
import todoScript from './components/todo/todoScript/todoScript'

document.addEventListener('DOMContentLoaded', function() {
  // html
  todoHtml();
  // js-logics
  todoScript();
})