export default function deleteTodo() {
  let deleteBtns = document.querySelectorAll('.delete-btn');
  
  for (let deleteBtn of deleteBtns){   
    deleteBtn.addEventListener('click', function(event) {
      let targetBtn = event.target;
      let parent = targetBtn.closest('.list__item');
      let listItems = document.querySelectorAll('.list__item');

      parent.remove();
      
      if (listItems.length==0) {
        console.log(stub);
        // stub
      }
      
    })
  }
}