const addBtn = document.getElementById('add-btn');
const formInput = document.getElementById('form-input');
const list = document.getElementById('list');
const input = document.getElementById('input');

function addTodo() {
  const todoItem = document.createElement('div');
  
  todoItem.innerHTML = `
    ${input.value}
    <div class="btn-wrapper">
      <button class="delete-btn btn">x</button>
      <button class="done-btn btn">
        <img src="./../images/done.jpg" alt="done" />
      </button>
    </div>
  `;
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