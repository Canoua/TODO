export default function todoItemHtml() {
  const input = document.getElementById('input');
  const error = document.getElementById('error');
  const stub = document.getElementById('stub');
  
  let todoItemHtml = `
    <div class="list__item">
      <div class="todo-item__input-wrapper">
        <input class="todo-item__input" value=${input.value} readonly>
        <button class="todo-item__confirm">ОК</button>
      </div>    
      <div class="btn-wrapper">
        <button class="edit-btn btn done-click edit-click">
          <img class="edit-icon" src="./images/edit.png" alt="edit">
        </button>
        <button class="done-btn btn done-click edit-click">
          <img src="./images/done.jpg" alt="done" />
        </button>
        <button class="delete-btn btn edit-click">x</button>
      </div>
    </div>     
  `;
 
  // валидация
  if (input.value !== '') {
    const listId = document.getElementById('list');

    // добавляем запись
    listId.insertAdjacentHTML('beforeend', todoItemHtml);

    // очищаем поле ввода
    input.value = '';

    // убираем ошибку
    error.style.display = '0';
    error.style.height = '0';

    // убираем заглушку
    function stubNone() {
      stub.classList.add('stub-none');
    }
    setTimeout(stubNone, 100);
  } else {
    // если поле ввода пустое - выводим ошибку
    error.style.display = 'block';

    function errorVisible() {
      error.style.opacity = 1;
      error.style.height = 'auto';
    }
    setTimeout(errorVisible, 100);
  }
}
