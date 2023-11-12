export default function actions() {
  let listClass = document.querySelector('.list');
  
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
      let fadeBtns = new Promise(function() {
        setTimeout(() => {
          btnWrapper.classList.add('fade');
        }, 300)
      });

      // убираем блок с кнопками
      let invisibleBtns = new Promise(() => {
        setTimeout(() => {
          btnWrapper.style.height='0';
          btnWrapper.style.width='0';
        }, 700)
      })

      let inputWrapperEdit = new Promise(() => {
        setTimeout(() => {
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
        }, 1000)
      })

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
}