import actions from "./modules/actions";
import renderItem from "./modules/renderItem";

export default function todoScript() {
  const addBtn = document.getElementById('add-btn');

  function adding(event) {
    event.preventDefault();
  
    renderItem();
    actions();
  }
  
  addBtn.addEventListener('click', adding); 
}
