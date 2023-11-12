export default function todoScript() {
  const form = document.getElementById('form');
  const input = document.getElementById('input');
  const stub = document.getElementById('stub');
  const list = document.getElementById('list');

  let tasks = [];

  if (localStorage.getItem('Массив дел')) {
    tasks = JSON.parse(localStorage.getItem('Массив дел'))

    tasks.forEach(function(task) {
      let taskHtml = `
        <li id="${task.id}" class="list__item">
          <div class="todo-item__input-wrapper">
            <input class="todo-item__input" value=${task.text} readonly>
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
      status: false
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
    //добавляем массив в локалсторадж
    localStorage.setItem('Массив дел', JSON.stringify(tasks));
  }

  form.addEventListener('submit', adding);  
  
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
    //добавляем массив в локалсторадж
    localStorage.setItem('Массив дел', JSON.stringify(tasks));
  }

  // let listClass = document.querySelector('.list');
  list.addEventListener('click', deleteTodo);

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

      //добавляем массив в локалсторадж
      localStorage.setItem('Массив дел', JSON.stringify(tasks));

      // // делаем кнопку редактирования не активной
      // doneElem.previousElementSibling.setAttribute('disabled', 'disabled');
      // doneElem.previousElementSibling.style.cursor = 'inherit';

      // // делаем кнопку подтверждения не активной
      // doneElem.setAttribute('disabled', 'disabled');
      // doneElem.style.cursor = 'inherit';

      // // добавляем перечеркивание дела
      // doneElem.closest('.list__item').classList.add('list__item_done');
      // doneElem.closest('.list__item').style.opacity = '0.3';
    }
  }

  // listClass.addEventListener('click', editTodo);
  list.addEventListener('click', doneTodo);
}