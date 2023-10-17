const addBtn = document.getElementById('add-btn');
const stub = document.getElementById('stub');

function addTodo() {
  const todoItem = document.createElement('div');
  const input = document.getElementById('input');
  const error = document.getElementById('error');
  
  //рендер дела/рефакторинг//
  todoItem.classList.add('list__item');
  todoItem.innerHTML = `
    <input class="todo-item__input" value=${input.value} readonly>
    <div class="btn-wrapper">
      <button class="delete-btn btn">x</button>
      <button class="edit-btn btn">
        <img class="edit-icon" src="./images/edit.png" alt="edit">
      </button>
      <button class="done-btn btn">
        <img src="./images/done.jpg" alt="done" />
      </button>
    </div>
  `;
 
  //validation
  function validation() {
    if(input.value !== '') {
      const list = document.getElementById('list');
      const editBtn = document.querySelectorAll('.edit-btn');

      list.appendChild(todoItem);
      for(let i=0; i<editBtn.length; i++) {
        editBtn[i].addEventListener('click', function(event) {
          let targetBtn = event.target;
          let listItem = targetBtn.closest('.list__item');
          let todoItemInput = listItem.querySelector('.todo-item__input');
          todoItemInput.removeAttribute('readonly');
          todoItemInput.style.borderColor='#000';
          todoItemInput.focus();
        })
      }
      
      input.value = '';
      error.innerHTML = '';
      stub.innerHTML = '';
    } else {
      error.innerHTML = 'введите название своего дела';
    }
  }
  validation();

  //удаление дела по кнопке "x"
  let deleteBtn = document.querySelectorAll('.delete-btn');
  for (let i=0; i<deleteBtn.length; i++){   
    deleteBtn[i].addEventListener('click', function(event) {
      let targetBtn = event.target;
      let parent = targetBtn.closest('.list__item');
      parent.remove();

      //добавляем заглушку
      if(i==0) {
        stub.innerHTML = `
          Дел нет
          <img class="list-done__stub-img" src="https://utyug.info/upload/medialibrary/3f9/3f9bd29509b04a7aed1b4b90b0099277.jpg">
        `;
      }
    })
  }

  //фиксация выполнения
  let doneBtn = document.querySelectorAll('.done-btn');
  for(let i=0; i<doneBtn.length; i++) {
    doneBtn[i].addEventListener('click', function(event) {
      let targetBtn = event.target;
      let listItem = targetBtn.closest('.list__item');

      // console.log(listItem.querySelector('.todo-item__input'));
    })
  }
}

addBtn.addEventListener('click', addTodo);
