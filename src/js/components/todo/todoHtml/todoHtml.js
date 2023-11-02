export default function todoHtml() {
  const todo = document.getElementById('todo');
  const input = document.getElementById('input');

  todo.innerHTML = `
    <div class="todo__header">
      <h1 class="title">Что хотите сделать?</h1>
      <form action="#" class="todo__form" id="form">
        <input type="text" placeholder="Дело" class="todo__input" id="input" autocomplete="on">
        <button class="add-btn btn" id="add-btn" type="submit">+</button>
      </form>
      <div class="error" id="error">введите название своего дела</div>
    </div>
    <div class="todo__output">
      <h2 class="title-2">Мои дела</h1>
      <article class="todo__output-content">
        <div class="stub" id="stub">
          <img class="list-done__stub-img" src="https://utyug.info/upload/medialibrary/3f9/3f9bd29509b04a7aed1b4b90b0099277.jpg">
        </div>  
        <ul class="list" id="list"></ul>
      </article>
    </div>
  `;
}
