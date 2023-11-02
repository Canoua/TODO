export default function deleteTodo() {
  let deleteBtns = document.querySelectorAll('.delete-btn');
  
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', function(event) {
      let targetBtn = event.target;
      let parent = targetBtn.closest('.list__item');
      let listClass = document.querySelector('.list');
  
      parent.remove();
     
      // добавляем отображение заглушки при отсутсвии дел
      if (listClass.children.length < 1) {
        stub.classList.remove('stub-none');
      }
    })
  })
}