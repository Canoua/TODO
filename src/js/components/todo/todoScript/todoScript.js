export default function todoScript() {
  const form = document.getElementById('form');
  const input = document.getElementById('input');
  const stub = document.getElementById('stub');
  const listId = document.getElementById('list');

  let tasks = [];

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
    listId.insertAdjacentHTML('beforeend', todoItemHtml);

    // удаление дела
    function deleteTodo(event) {
      let deleteElem = event.target;
      let listItemId =  deleteElem.closest('.list__item').id;
      // ищем индекс удаляемого дела
      const deleteTaskFromArr =  tasks.findIndex(function(task) {
        // console.log(task);
        if(task.id == listItemId) {
          return true;
          // console.log(listItemId);
        }
      });

      // splice не работает - не знаю почему
      // for(let i=0; i<tasks.length; i++) {
      //   delete tasks[deleteTaskFromArr];
      // }

      
      // console.log(deleteTaskFromArr);

      // tasks.splice(deleteTaskFromArr, 0);
      console.log(deleteTaskFromArr);

      // удаляем дело по клике на кнопку
      if (deleteElem.dataset.action === 'delete') {
        deleteElem.closest('.list__item').remove();
      }

      // добавляем отображение заглушки при отсутсвии дел
      if (listClass.children.length < 1) {
        stub.classList.remove('stub-none');
      }
    }

    let listClass = document.querySelector('.list');
    listClass.addEventListener('click', deleteTodo);
    console.log(tasks);
  }
  
  form.addEventListener('submit', adding);   
}