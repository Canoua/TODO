export default function editTodo() {
  let editBtns = document.querySelectorAll('.edit-btn');
  
  for (let editBtn of editBtns) {
    editBtn.addEventListener('click', function(event) {
      //определяем элемент, по которому кликаем
      let targetEditBtn = event.target;
      //находим обертку нашего дела
      let listItem = targetEditBtn.closest('.list__item');
      //инпут для редактирования дела
      let todoItemInput = listItem.querySelector('.todo-item__input');
      
      let todoItemInputWrapper = listItem.querySelector('.todo-item__input-wrapper');
      let confirmBtns = todoItemInputWrapper.querySelectorAll('.todo-item__confirm');
      let editBtnsClick = document.querySelectorAll('.edit-click');

      for(let editBtnClick of editBtnsClick) {
        editBtnClick.setAttribute('disabled', 'disabled');
      }

      todoItemInput.removeAttribute('readonly');
      todoItemInput.style.borderColor='#000';
      todoItemInput.focus();
     
      for (let confirmBtn of confirmBtns) {
        confirmBtn.style.display = 'block';
        confirmBtn.addEventListener('click', function() {
          for(let editBtnClick of editBtnsClick) {
            editBtnClick.removeAttribute('disabled', 'disabled');
          }
          todoItemInput.setAttribute('readonly', 'readonly');
          todoItemInput.style.borderColor='transparent';
          confirmBtn.style.display = 'none';
        })
      }
    })
  }
}