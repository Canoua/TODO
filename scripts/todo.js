const addBtn = document.getElementById('add-btn');
const formInput = document.getElementById('form-input');
const list = document.getElementById('list');
const input = document.getElementById('input');

function addTodo() {
  const todoItem = document.createElement('div');
  
  todoItem.innerHTML = `${input.value}<button class="delete-btn btn">удалить</button><button class="done-btn btn">выполненно</button>`;
  todoItem.classList.add('list__item');
  list.appendChild(todoItem);

  let deleteBtn = document.querySelectorAll('.delete-btn');
  for (let i=0; i<deleteBtn.length; i++){
    if(deleteBtn[i]) {
      deleteBtn[i].addEventListener('click', function(event) {
        let targetBtn = event.target;
        let parent = targetBtn.parentNode;
        parent.style.display = 'none';
      })
    }
  }  
}

addBtn.addEventListener('click', addTodo);
