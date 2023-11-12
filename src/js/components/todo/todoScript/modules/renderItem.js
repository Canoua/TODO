export default function renderItem() {
  // const error = document.getElementById('error');
  const input = document.getElementById('input');
  // const stub = document.getElementById('stub');

  // const inputValue = input.value;
  // let tasks = [];
  // const taskData = {
  //   id: Date.now(),
  //   text: inputValue,
  //   status: false
  // }

    
  // tasks.push(taskData);
  // console.log(tasks);
  
  if (input.value !== '') {
    // const listId = document.getElementById('list');
    
    let listItem = document.querySelectorAll('.list__item');

      // добавляем массив в локалсторадж
      // localStorage.setItem('Массив дел', JSON.stringify(arr));

    for (let i=0; i<listItem.length; i++) {  
      listItem[i].classList.add('active');

      // добавляем данные в массив
      // let todoItemInput = listItem[i].querySelector('.todo-item__input');


       // удаление дела
      // function deleteTodo(event) {
        // let deleteElem = event.target;

        // удаляем дело по клике на кнопку
        // if (deleteElem.dataset.action === 'delete') {
          // deleteElem.closest('.list__item').remove();
        // }

        // добавляем отображение заглушки при отсутсвии дел
        // if (listClass.children.length < 1) {
          // stub.classList.remove('stub-none');
        // }

        // console.log(arr[i]);
        // console.log(localStorage.getItem('Массив дел'));
      // }
      // let listClass = document.querySelector('.list');
      // listClass.addEventListener('click', deleteTodo);
    }

   

   

    // очищаем поле ввода
    input.value = '';

    // убираем ошибку
    // error.style.display = '0';
    // error.style.height = '0';

    // убираем заглушку
    stub.classList.add('stub-none');
  
  } else {
    // если поле ввода пустое - выводим ошибку
    // error.style.opacity = 1;
    // error.style.height = 'auto';
  } 
}
  