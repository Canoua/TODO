const addBtn = document.getElementById('add-btn');
const formInput = document.getElementById('form-input');
const list = document.getElementById('list');
const input = document.getElementById('input');

function addTodo() {
  const todoItem = document.createElement('div');
  
  todoItem.innerHTML = `${input.value}<button class="delete-btn btn">удалить</button><button class="done-btn btn">выполненно</button>`;
  todoItem.classList.add('list__item');
  list.appendChild(todoItem);
}

addBtn.addEventListener('click', addTodo);

const deleteBtn = document.querySelector('.delete-btn');
if(deleteBtn) {
  deleteBtn.addEventListener('click', function(event) {
  console.log(event.target);
})
}

