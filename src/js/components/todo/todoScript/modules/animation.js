export default function animation() {
  function adding() {
    let listItem = document.querySelectorAll('.list__item');
    for (let i=0; i<listItem.length; i++) {
      listItem[i].classList.add('active');
    }
  }

  setTimeout(adding, 300)
}
