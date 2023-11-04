export default function actions() {
  let listClass = document.querySelector('.list');
  
  // удаление дела
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
      // обертка с кнопками
      let btnWrapper = listItem.querySelector('.btn-wrapper');
      let todoItemInputWrapper = listItem.querySelector('.todo-item__input-wrapper');
      // кнопка подтверждения
      let confirmBtn = todoItemInputWrapper.querySelector('.todo-item__confirm'); 
      // инпут для редактирования дела
      let todoItemInput = listItem.querySelector('.todo-item__input');

      // плавное исчезновение
      function fadeBtns() {
        btnWrapper.classList.add('fade');
      }

      // убираем блок с кнопками
      function invisibleBtns() {
        btnWrapper.style.height='0';
        btnWrapper.style.width='0';
      }

      function inputWrapperEdit() {
        // добавляем бордер на обертку инпута
        todoItemInputWrapper.style.borderColor = '#000';
        // расширяем контейнер с инпутом
        todoItemInputWrapper.style.width = '100%';

        todoItemInput.style.width = '90%';
        // добавляем возможность редактировани дела
        todoItemInput.removeAttribute('readonly');
        // фокус на инпуте
        todoItemInput.focus();

        confirmBtn.style.width = '10%';
        // отображаем кнопку подтверждения
        confirmBtn.style.display = 'block';
      }

      setTimeout(fadeBtns, 300);
      setTimeout(invisibleBtns, 700);
      setTimeout(inputWrapperEdit, 1000);

      confirmBtn.addEventListener('click', function() {
        // возвращаем контейнер в прежнее состояние
        todoItemInputWrapper.style.borderColor = 'transparent';
        todoItemInputWrapper.style.width = 'auto';
        
        // отображаем обертку с кнопками
        btnWrapper.classList.remove('fade');
        btnWrapper.style.height='auto';  
        btnWrapper.style.width='auto';
        
        // убираем возможность редактирования дела
        todoItemInput.setAttribute('readonly', 'readonly');
        todoItemInput.style.width = 'auto';

        // скрываем кнопку подтверждения 
        confirmBtn.style.display = 'none';
      })
    }
  }

  // подтверждение выполнения дела
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