export default function renderItem() {
  const error = document.getElementById('error');
  const input = document.getElementById('input');
  const stub = document.getElementById('stub');

  const data = {
    id: Date.now(),
    text: input.value,
    status: false
  }

  let todoItemHtml = `
    <li id="${data.id}" class="list__item">
      <div class="todo-item__input-wrapper">
        <input class="todo-item__input" value=${data.text} readonly>
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
    </li>     
  `;
  
  // if (input.value !== '') {
    const listId = document.getElementById('list');
    
    // добавляем запись
    listId.insertAdjacentHTML('beforeend', todoItemHtml);

    let listItem = document.querySelectorAll('.list__item');
    
    let arr = [];
    for (let i=0; i<listItem.length; i++) {
      
      listItem[i].classList.add('active');

      // добавляем данные в массив
      // let todoItemInput = listItem[i].querySelector('.todo-item__input');

      

      arr.push(data);

      // добавляем массив в локалсторадж
      localStorage.setItem('Массив дел', JSON.stringify(arr));

       // удаление дела
      function deleteTodo(event) {
        let deleteElem = event.target;

        // удаляем дело по клике на кнопку
        if (deleteElem.dataset.action === 'delete') {
          deleteElem.closest('.list__item').remove();
        }

        // добавляем отображение заглушки при отсутсвии дел
        if (listClass.children.length < 1) {
          stub.classList.remove('stub-none');
        }

        console.log(arr[i]);
        // console.log(localStorage.getItem('Массив дел'));
      }
      let listClass = document.querySelector('.list');
      listClass.addEventListener('click', deleteTodo);
    }
     console.log(arr);

    // очищаем поле ввода
    input.value = '';

    // убираем ошибку
    error.style.display = '0';
    error.style.height = '0';

    // убираем заглушку
    stub.classList.add('stub-none');
  
  // } else {
    // если поле ввода пустое - выводим ошибку
    // error.style.opacity = 1;
    // error.style.height = 'auto';
  // } 
}
  