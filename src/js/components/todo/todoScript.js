import addTodo from "./modules/addTodo";

export default function todoScript() {
  const addBtn = document.getElementById('add-btn');
  const stub = document.getElementById('stub');
  
  addTodo();
  addBtn.addEventListener('click', addTodo);
}

