export default function doneTodo() {
  let doneBtn = document.querySelectorAll('.done-btn');
  for(let i=0; i<doneBtn.length; i++) {
    doneBtn[i].addEventListener('click', function(event) {
      let targetBtn = event.target;
      let listItem = targetBtn.closest('.list__item');
      console.log('done');
    })
  }
}   
  
  