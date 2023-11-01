export default function doneTodo() {
  let doneBtns = document.querySelectorAll('.done-btn');

  for(let doneBtn of doneBtns) {
    doneBtn.addEventListener('click', function(event) {
      let targetBtn = event.target;
      let listItem = targetBtn.closest('.list__item');
      let doneBtnsClick = document.querySelectorAll('.done-click');
      
      listItem.classList.add('list__item_done');

      // refactoring
      for(let doneBtnClick of doneBtnsClick){
        doneBtnClick.setAttribute('disabled', 'disabled');
        doneBtnClick.style.cursor = 'inherit';
      }
    })
  }
}   
  