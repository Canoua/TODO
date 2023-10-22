import validation from "./validation";
import deleteTodo from "./actions/deleteTodo";
import doneTodo from "./actions/doneTodo";

export default function addTodo() {
  const addBtn = document.getElementById('add-btn');
  function adding() {
    const input = document.getElementById('input');
    const error = document.getElementById('error');
    
    const stub = document.getElementById('stub');
    //рендер дела/рефакторинг//

    //плавное добавление дела
    // function adding() {
    //   let listItem = document.querySelectorAll('.list__item');
    //   for (let i=0; i<listItem.length; i++) {
    //     listItem[i].classList.add('active');
    //   }
    // }

    // adding();
    // setTimeout(adding, 1000)
      
    validation();
    //удаление дела по кнопке "x"
    deleteTodo();
    //фиксация выполнения
    doneTodo();
    }
    
  addBtn.addEventListener('click', adding); 
}
