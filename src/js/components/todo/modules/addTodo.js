import todoItemHtml from "../render/todoItemHtml";
// import deleteTodo from "./actions/deleteTodo";
// import editTodo from "./actions/editTodo";
// import doneTodo from "./actions/doneTodo";
import actions from "./actions";
import animation from "./animation";

export default function addTodo() {
  const addBtn = document.getElementById('add-btn');

  function adding(event) {
    event.preventDefault();
    // рендер дела
    todoItemHtml();
    // animation
    animation();
    // кнопки
    actions();
  }
  addBtn.addEventListener('click', adding); 
}
