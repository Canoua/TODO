import editTodo from "./actions/editTodo";

export default function validation() {
  let todoItemHtml = `
    <div class="list__item">
      <div class="todo-item__input-wrapper">
        <input class="todo-item__input" value=${input.value} readonly>
      </div>    
      <div class="btn-wrapper">
        <button class="edit-btn btn">
          <img class="edit-icon" src="./images/edit.png" alt="edit">
        </button>
        <button class="done-btn btn">
          <img src="./images/done.jpg" alt="done" />
        </button>
        <button class="delete-btn btn">x</button>
      </div>
    </div>     
  `  
  
  //если поле ввода не пустое, то добавляем дело в список, очищаем поле
  if(input.value !== '') {
    const list = document.getElementById('list');
    list.insertAdjacentHTML('beforeend', todoItemHtml);
    editTodo()
    input.value = '';
    error.innerHTML = '';
    stub.innerHTML = '';
  } else {
    //иначе выводим ошибку
    error.innerHTML = 'введите название своего дела';
  }
}
