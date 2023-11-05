export default function validation() {
  const error = document.getElementById('error');
  const stub = document.getElementById('stub');

  let todoItemHtml = `
    <div class="list__item">
      <div class="todo-item__input-wrapper">
        <input class="todo-item__input" value=${input.value} readonly>
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
    </div>     
  `;

    

  if (input.value !== '') {
    const listId = document.getElementById('list');
    
    // добавляем запись
    listId.insertAdjacentHTML('beforeend', todoItemHtml);

    let listItem = document.querySelectorAll('.list__item');

    for (let i=0; i<listItem.length; i++) {
      listItem[i].classList.add('active');
    }

    // очищаем поле ввода
    input.value = '';

    // убираем ошибку
    error.style.display = '0';
    error.style.height = '0';

    // убираем заглушку
    stub.classList.add('stub-none');
  } else {
    // если поле ввода пустое - выводим ошибку
    error.style.opacity = 1;
    error.style.height = 'auto';
  }

  
}
  