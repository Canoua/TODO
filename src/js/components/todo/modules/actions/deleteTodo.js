export default function deleteTodo() {
  let deleteBtns = document.querySelectorAll('.delete-btn');
  
  for (let deleteBtn of deleteBtns){   
    deleteBtn.addEventListener('click', function(event) {
      let targetBtn = event.target;
      let parent = targetBtn.closest('.list__item');
      parent.remove();

      // добавляем заглушку
      // if(deleteBtn.length=0) {
      //   stub.innerHTML = `
      //     Дел нет
      //     <img class="list-done__stub-img" src="https://utyug.info/upload/medialibrary/3f9/3f9bd29509b04a7aed1b4b90b0099277.jpg">
      //   `;
      // }
    })
  }
}