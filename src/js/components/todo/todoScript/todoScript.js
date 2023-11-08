import actions from "./modules/actions";
import renderItem from "./modules/renderItem";

export default function todoScript() {
  const form = document.getElementById('form');

  function adding(event) {
    event.preventDefault();
  
    renderItem();
    actions();
  }
  
  form.addEventListener('submit', adding); 
}