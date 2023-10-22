export default function todoHtml() {
  const todo = document.getElementById('todo');

  todo.innerHTML = `
    <div class="todo__header">
      <h1 class="title">Что хотите сделать?</h1>
      <form action="#" class="todo__form" id="form-input">
        <input type="text" placeholder="Дело" class="todo__input" id="input" autocomplete="on">
        <button class="add-btn btn" id="add-btn" type="submit">+</button>
      </form>
      <div class="error" id="error"></div>
    </div>
    <div class="todo__output">
      <article class="todo__output-content">
        <h2 class="title-2">Мои дела</h1>
        <ul class="list" id="list">
          <div class="stub" id="stub">
            <p class="stub__title">Дел нет :(</p>
            <img class="list-done__stub-img" src="https://utyug.info/upload/medialibrary/3f9/3f9bd29509b04a7aed1b4b90b0099277.jpg">
          </div>
        </ul>
      </article>
    </div>
  `
}

