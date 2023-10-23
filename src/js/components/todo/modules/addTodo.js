import todoItemHtml from "../render/todoItemHtml";
import deleteTodo from "./actions/deleteTodo";
import editTodo from "./actions/editTodo";
import doneTodo from "./actions/doneTodo";

export default function addTodo() {
  const addBtn = document.getElementById('add-btn');
  // const form = document.getElementById('form');

  function adding(event) {
    event.preventDefault();
    
    //ref!!!
    const input = document.getElementById('input');
    const error = document.getElementById('error');
    const stub = document.getElementById('stub');
   //[[ref!!]]

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
