export default function actions() {
  let editBtns = document.querySelectorAll('.edit-btn');
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

  function doneTodo(event) {
    let doneElem = event.target;

    if (doneElem.dataset.action === "done") {
      doneElem.closest('.list__item').classList.add('list__item_done');
      doneElem.setAttribute('disabled', 'disabled');
      doneElem.style.cursor = 'inherit';
    }
  }

  listClass.addEventListener('click', deleteTodo);
  listClass.addEventListener('click', doneTodo);
}