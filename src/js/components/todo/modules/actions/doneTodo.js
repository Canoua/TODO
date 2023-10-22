export default function doneTodo() {
  let doneBtns = document.querySelectorAll('.done-btn');
  for(let doneBtn of doneBtns) {
    doneBtn.addEventListener('click', function(event) {
      let targetBtn = event.target;
      let listItem = targetBtn.closest('.list__item');
      console.log('done');
    })
  }
}   
  