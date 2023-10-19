const addBtn = document.getElementById('add-btn');
const stub = document.getElementById('stub');

function addTodo() {
  const input = document.getElementById('input');
  const error = document.getElementById('error');
  let editBtn = document.querySelectorAll('.edit-btn');
  
  //рендер дела/рефакторинг//
  const todoItem = document.createElement('div');
  let todoItemHtml = `
    <div class="list__item">
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
    </div>   
  `
 
  //validation
  function validation() {
    if(input.value !== '') {
      const list = document.getElementById('list');
      
      list.insertAdjacentHTML('beforeend', todoItemHtml);
      input.value = '';
      error.innerHTML = '';
      stub.innerHTML = '';
    } else {
      error.innerHTML = 'введите название своего дела';
    }
  }
  validation();



  for (let i=0; i<editBtn.length; i++) {
    editBtn[i].addEventListener('click', function(event) {
      //определяем элемент, по которому кликаем
      let targetBtn = event.target;
      //находим обертку нашего дела
      let listItem = targetBtn.closest('.list__item');
      //инпут для редактирования дела
      let todoItemInput = listItem.querySelector('.todo-item__input');

      todoItemInput.removeAttribute('readonly');
      todoItemInput.style.borderColor='#000';
      todoItemInput.focus();
    })
  }
  

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
    })
  }
}

addBtn.addEventListener('click', addTodo);
