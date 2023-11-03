export default function actions() {
  let listClass = document.querySelector('.list');
  
  function deleteTodo(event) {
    let deleteElem = event.target;

    // удаляем дело по клике на кнопку
    if (deleteElem.dataset.action === 'delete') {
      deleteElem.closest('.list__item').remove();
    }

    // добавляем отображение заглушки при отсутсвии дел
    if (listClass.children.length < 1) {
      stub.classList.remove('stub-none');
    }
  }

  // редактирование дела
  function editTodo(event) {
    // определяем элемент, по которому кликаем
    let editBtn = event.target;

    if(editBtn.dataset.action === 'edit') {
      // находим обертку нашего дела
      let listItem = editBtn.closest('.list__item');
      let todoItemInputWrapper = listItem.querySelector('.todo-item__input-wrapper');
      let confirmBtn = todoItemInputWrapper.querySelector('.todo-item__confirm'); 
      // инпут для редактирования дела
      let todoItemInput = listItem.querySelector('.todo-item__input');

      // делаем кнопку edit не кликабельной
      editBtn.setAttribute('disabled', 'disabled');
      // добавляем бордер на обертку инпута
      todoItemInputWrapper.style.border='1px solid #000';
      // добавляем возможность редактировани дела
      todoItemInput.removeAttribute('readonly');
      // фокус на инпуте
      todoItemInput.focus();

      // отображаем кнопку подтверждения
      confirmBtn.style.display = 'block';

      confirmBtn.addEventListener('click', function() {
        editBtn.removeAttribute('disabled', 'disabled');
        todoItemInputWrapper.style.border='none';
        todoItemInput.setAttribute('readonly', 'readonly');
          todoItemInput.style.borderColor='transparent';
          confirmBtn.style.display = 'none';
      })
    }
  }


  function doneTodo(event) {
    let doneElem = event.target;

    if (doneElem.dataset.action === "done") {
      // делаем кнопку редактирования не активной
      doneElem.previousElementSibling.setAttribute('disabled', 'disabled');
      doneElem.previousElementSibling.style.cursor = 'inherit';

      // делаем кнопку подтверждения не активной
      doneElem.setAttribute('disabled', 'disabled');
      doneElem.style.cursor = 'inherit';

      // добавляем перечеркивание дела
      doneElem.closest('.list__item').classList.add('list__item_done');
    }
  }

  listClass.addEventListener('click', deleteTodo);
  listClass.addEventListener('click', editTodo);
  listClass.addEventListener('click', doneTodo);
}