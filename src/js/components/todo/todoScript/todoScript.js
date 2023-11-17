export default function todoScript() {
  const form = document.getElementById('form');
  const input = document.getElementById('input');
  const stub = document.getElementById('stub');
  const list = document.getElementById('list');

  let tasks = [];

  // рендер разметки из локалсторадж
  if (localStorage.getItem('Массив дел')) {
    tasks = JSON.parse(localStorage.getItem('Массив дел'))

    tasks.forEach(function(task) {
      function checkedClass() {
        if (task.status == true) {
          task.disabled = 'disabled';
          return 'list__item list__item_done';
        } else {
          return 'list__item ';
        };
      }
      
      let taskHtml = `
        <li id="${task.id}" class="${checkedClass()}">
          <div class="todo-item__input-wrapper">
            <input class="todo-item__input" value=${task.text} readonly>
            <button class="todo-item__confirm">ОК</button>
          </div>    
          <div class="btn-wrapper">
            <button class="edit-btn btn done-click edit-click" data-action="edit" disabled=${task.disabled}>
              <img class="edit-icon" src="./images/edit.png" alt="edit">
            </button>
            <button class="done-btn btn done-click edit-click" data-action="done" disabled=${task.disabled}>
              <img src="./images/done.jpg" alt="done" />
            </button>
            <button class="delete-btn btn edit-click" data-action="delete">x</button>
          </div>
        </li>     
      `;

      list.insertAdjacentHTML('beforeend', taskHtml);

      // добавляем отображение заглушки при отсутсвии дел
      if (list.children.length > 0) {
        stub.classList.add('stub-none');
      }
    });
  }

  function adding(event) {
    event.preventDefault();

    const inputValue = input.value;
    const taskData = {
      id: Date.now(),
      text: inputValue,
      status: false,
      disabled: 'disabled',
    }
   
    let todoItemHtml = `
      <li id="${taskData.id}" class="list__item">
        <div class="todo-item__input-wrapper">
          <input class="todo-item__input" value=${taskData.text} readonly>
          <button class="todo-item__confirm">ОК</button>
        </div>    
        <div class="btn-wrapper">
          <button class="edit-btn btn done-click edit-click" data-action="edit">
            <img class="edit-icon" src="./images/edit.png" alt="edit">
          </button>
          <button class="done-btn btn done-click edit-click" data-action="done">
            <img src="./images/done.jpg" alt="done" />
          </button>
          <button class="delete-btn btn edit-click" data-action="delete">x</button>
        </div>
      </li>     
    `;

    // добавляем объект с данными в массив дел
    tasks.push(taskData);
    // убираем заглушку
    stub.classList.add('stub-none');
    // добавляем дело
    list.insertAdjacentHTML('beforeend', todoItemHtml);

    console.log(tasks);
    // добавляем массив в локалсторадж
    localStorage.setItem('Массив дел', JSON.stringify(tasks));
  }

  // удаление дела
  function deleteTodo(event) {
    let deleteElem = event.target;
    let listItemId =  deleteElem.closest('.list__item').id;
    // ищем индекс удаляемого дела
    const deleteTaskFromArr =  tasks.findIndex(function(task) {
      if(task.id == listItemId) {
        return true;
      }
    });
  
    // удаляем дело по клике на кнопку
    if (deleteElem.dataset.action === 'delete') {
      deleteElem.closest('.list__item').remove();
       // удаляем дело из массива
      tasks.splice(deleteTaskFromArr, 1);
    }

    // добавляем отображение заглушки при отсутсвии дел
    if (list.children.length < 1) {
      stub.classList.remove('stub-none');
    }

    console.log(tasks);
    // добавляем массив в локалсторадж
    localStorage.setItem('Массив дел', JSON.stringify(tasks));
  }

  // подтверждение выполнения дела
  function doneTodo(event) {
    let doneElem = event.target;

    if (doneElem.dataset.action === "done") {
      let listItemDoneId =  doneElem.closest('.list__item').id;
      // ищем индекс дела, которое подтверждаем
      const doneTaskFromArr =  tasks.findIndex(function(task) {
        if(task.id == listItemDoneId) {
          return true;
        }
      });

      tasks[doneTaskFromArr].status = true;

      if (tasks[doneTaskFromArr].status == true) {
        doneElem.closest('.list__item').classList.add('list__item_done');
      }

      // добавляем массив в локалсторадж
      localStorage.setItem('Массив дел', JSON.stringify(tasks));

      // делаем кнопку редактирования не активной
      doneElem.previousElementSibling.setAttribute('disabled', 'disabled');
      doneElem.previousElementSibling.style.cursor = 'inherit';
      doneElem.previousElementSibling.style.opacity = '0.5';

      // делаем кнопку подтверждения не активной
      doneElem.setAttribute('disabled', 'disabled');
      doneElem.style.cursor = 'inherit';
      doneElem.style.opacity = '0.5';
    }
  }

  // редактирование дела
  // function editTodo(event) {
  //   // определяем элемент, по которому кликаем
  //   let editBtn = event.target;

  //   if(editBtn.dataset.action === 'edit') {
  //     // находим обертку нашего дела
  //     let listItem = editBtn.closest('.list__item');
  //     // обертка с кнопками
  //     let btnWrapper = listItem.querySelector('.btn-wrapper');
  //     let todoItemInputWrapper = listItem.querySelector('.todo-item__input-wrapper');
  //     // кнопка подтверждения
  //     let confirmBtn = todoItemInputWrapper.querySelector('.todo-item__confirm'); 
  //     // инпут для редактирования дела
  //     let todoItemInput = listItem.querySelector('.todo-item__input');

  //     // плавное исчезновение
  //     let fadeBtns = new Promise(function() {
  //       setTimeout(() => {
  //         btnWrapper.classList.add('fade');
  //       }, 300)
  //     });

  //     // убираем блок с кнопками
  //     let invisibleBtns = new Promise(() => {
  //       setTimeout(() => {
  //         btnWrapper.style.height='0';
  //         btnWrapper.style.width='0';
  //       }, 700)
  //     })

  //     let inputWrapperEdit = new Promise(() => {
  //       setTimeout(() => {
  //         // добавляем бордер на обертку инпута
  //         todoItemInputWrapper.style.borderColor = '#000';
  //         // расширяем контейнер с инпутом
  //         todoItemInputWrapper.style.width = '100%';

  //         todoItemInput.style.width = '90%';
  //         // добавляем возможность редактировани дела
  //         todoItemInput.removeAttribute('readonly');
  //         // фокус на инпуте
  //         todoItemInput.focus();

  //         confirmBtn.style.width = '10%';
  //         // отображаем кнопку подтверждения
  //         confirmBtn.style.display = 'block';
  //       }, 1000)
  //     })

  //     confirmBtn.addEventListener('click', function() {
  //       // возвращаем контейнер в прежнее состояние
  //       todoItemInputWrapper.style.borderColor = 'transparent';
  //       todoItemInputWrapper.style.width = 'auto';
        
  //       // отображаем обертку с кнопками
  //       btnWrapper.classList.remove('fade');
  //       btnWrapper.style.height='auto';  
  //       btnWrapper.style.width='auto';
        
  //       // убираем возможность редактирования дела
  //       todoItemInput.setAttribute('readonly', 'readonly');
  //       todoItemInput.style.width = 'auto';

  //       // скрываем кнопку подтверждения 
  //       confirmBtn.style.display = 'none';
  //     })
  //   }
  // }

  form.addEventListener('submit', adding); 
  list.addEventListener('click', deleteTodo);
  list.addEventListener('click', doneTodo);
}