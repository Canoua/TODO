export default function actions() {
  let deleteBtns = document.querySelectorAll('.delete-btn');
  let editBtns = document.querySelectorAll('.edit-btn');
  let doneBtns = document.querySelectorAll('.done-btn');
  
  // удаление дела
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', function(event) {
      let targetBtn = event.target;
      let parent = targetBtn.closest('.list__item');
      let listClass = document.querySelector('.list');
  
      parent.remove();
     
      // добавляем отображение заглушки при отсутсвии дел
      if (listClass.children.length < 1) {
        stub.classList.remove('stub-none');
      }
    })
  })

  // редактирование дела
  for (let editBtn of editBtns) {
    editBtn.addEventListener('click', function(event) {
      // определяем элемент, по которому кликаем
      let targetEditBtn = event.target;
      // находим обертку нашего дела
      let listItem = targetEditBtn.closest('.list__item');
      // инпут для редактирования дела
      let todoItemInput = listItem.querySelector('.todo-item__input');
      
      let todoItemInputWrapper = listItem.querySelector('.todo-item__input-wrapper');
      let confirmBtns = todoItemInputWrapper.querySelectorAll('.todo-item__confirm');
      let editBtnsClick = document.querySelectorAll('.edit-click');

      for (let editBtnClick of editBtnsClick) {
        editBtnClick.setAttribute('disabled', 'disabled');
        todoItemInputWrapper.style.border='1px solid #000';
      }

      todoItemInput.removeAttribute('readonly');
      todoItemInput.style.borderColor='#000';
      todoItemInput.focus();
     
      for (let confirmBtn of confirmBtns) {
        confirmBtn.style.display = 'block';
        confirmBtn.addEventListener('click', function() {
          for (let editBtnClick of editBtnsClick) {
            editBtnClick.removeAttribute('disabled', 'disabled');
            todoItemInputWrapper.style.border='none';
          }
          todoItemInput.setAttribute('readonly', 'readonly');
          todoItemInput.style.borderColor='transparent';
          confirmBtn.style.display = 'none';
        })
      }
    })
  }


  // подтверждение дела
  for (let doneBtn of doneBtns) {
    doneBtn.addEventListener('click', function(event) {
      let targetBtn = event.target;
      let listItem = targetBtn.closest('.list__item');
      let doneBtnsClick = document.querySelectorAll('.done-click');
      
      listItem.classList.add('list__item_done');

      // refactoring
      for (let doneBtnClick of doneBtnsClick) {
        doneBtnClick.setAttribute('disabled', 'disabled');
        doneBtnClick.style.cursor = 'inherit';
      }
    })
  }
}