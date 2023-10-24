import todoItemHtml from "../render/todoItemHtml";
import deleteTodo from "./actions/deleteTodo";
import editTodo from "./actions/editTodo";
import doneTodo from "./actions/doneTodo";

export default function addTodo() {
  const addBtn = document.getElementById('add-btn');

  function adding(event) {
    event.preventDefault();

    todoItemHtml();
    //функция кнопки редактирования
    editTodo();
    //удаление дела по кнопке "x"
    deleteTodo();
    //фиксация выполнения
    doneTodo();
  }
  addBtn.addEventListener('click', adding); 
}
