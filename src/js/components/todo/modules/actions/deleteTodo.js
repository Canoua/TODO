export default function deleteTodo() {
  let deleteBtns = document.querySelectorAll('.delete-btn');
  let listItems = document.querySelectorAll('.list__item');
  
  // console.log(listItems);
  deleteBtns.forEach((deleteBtn) => {
  
    deleteBtn.addEventListener('click', function(event) {
      let targetBtn = event.target;
      let parent = targetBtn.closest('.list__item');
      // listItems
      parent.remove();
      // console.log(parent.indexOf());
      //for(let i=0; i<listItems.length; i++) {
      // console.log(listItems.length);  
      // }
      // console.log(listItems.length-1);
      if(listItems.length < 1) {
        stub.classList.remove('stub-none');
      }
    })
  })
}