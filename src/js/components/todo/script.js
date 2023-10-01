const addBtn = document.getElementById('add-btn');

function addTodo() {
  const todoItem = document.createElement('div');
  const input = document.getElementById('input');
  const error = document.getElementById('error');
  const stub = document.getElementById('stub');
  stub.innerHTML = 'Дел нет'; 
 
  //рендер дела/рефакторинг
  todoItem.classList.add('list__item');
  todoItem.innerHTML = `
    ${input.value}
    <div class="btn-wrapper">
      <button class="delete-btn btn">x</button>
      <button class="done-btn btn">
        <img src="./../images/done.jpg" alt="done" />
      </button>
    </div>
  `;
  
  //validation
  function validation() {
    if(input.value !== '') {
      const list = document.getElementById('list');

      list.appendChild(todoItem);
      input.value = '';
      error.innerHTML = '';
      stub.innerHTML = '';
    } else {
      error.innerHTML = 'введите название своего дела';
      // stub.innerHTML = 'Дел нет';
    }
  }
  validation();

  //удаление дела по кнопке "x"
  let deleteBtn = document.querySelectorAll('.delete-btn');
  for (let i=0; i<deleteBtn.length; i++){   
    deleteBtn[i].addEventListener('click', function(event) {
      let targetBtn = event.target;
      let parent = targetBtn.closest('.list__item');
      parent.style.display = 'none';
      if(deleteBtn.length == 0) {
        stub.innerHTML = 'Дел нет';
      }
    })
  }  
}

addBtn.addEventListener('click', addTodo);