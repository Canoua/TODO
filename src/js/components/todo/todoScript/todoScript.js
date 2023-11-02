import actions from "./modules/actions";
import animation from "./modules/animation";
import validation from "./modules/validation";

export default function todoScript() {
  const addBtn = document.getElementById('add-btn');

  function adding(event) {
    event.preventDefault();
    // validation
    validation();
    // animation
    animation();
    // кнопки
    actions();
  }
  
  addBtn.addEventListener('click', adding); 
}
