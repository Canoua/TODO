export default function editTodo() {
  let editBtn = document.querySelectorAll('.edit-btn');
  for (let i=0; i<editBtn.length; i++) {
    editBtn[i].addEventListener('click', function(event) {
      //определяем элемент, по которому кликаем
      let targetEditBtn = event.target;
      //находим обертку нашего дела
      let listItem = targetEditBtn.closest('.list__item');
      //инпут для редактирования дела
      let todoItemInput = listItem.querySelector('.todo-item__input');
      let todoItemInputWrapper = listItem.querySelector('.todo-item__input-wrapper');
      
      //кнопка для подтверждения редактирования
      // let confirmBtn = document.querySelector('.todo-item__confirm');
      let todoItemConfirm = `
        <button class="todo-item__confirm">Подтвердить</button>
      `;

      todoItemInput.removeAttribute('readonly');
      todoItemInput.style.borderColor='#000';
      todoItemInput.focus();
      todoItemInputWrapper.insertAdjacentHTML('beforeend', todoItemConfirm);

      let confirmBtn = document.querySelectorAll('.todo-item__confirm');
      for (let i=0; i<confirmBtn.length; i++) {
        confirmBtn[i].addEventListener('click', function() {
          todoItemInput.setAttribute('readonly', 'readonly');
          todoItemInput.style.borderColor='#fff';
          confirmBtn[i].remove();
        })
      }
    })
  }
}