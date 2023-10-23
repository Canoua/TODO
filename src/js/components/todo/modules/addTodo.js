// import validation from "./validation";
import todoItemHtml from "../render/todoItemHtml";
import deleteTodo from "./actions/deleteTodo";
import doneTodo from "./actions/doneTodo";

export default function addTodo() {
  const form = document.getElementById('form');

  function adding(event) {
    event.preventDefault();
    const input = document.getElementById('input');
    const error = document.getElementById('error');
    const stub = document.getElementById('stub');
   
    todoItemHtml();
    //удаление дела по кнопке "x"
    deleteTodo();
    //фиксация выполнения
    doneTodo();
  }
  form.addEventListener('click', adding); 
}
