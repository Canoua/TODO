const todo = document.getElementById('todo');

todo.innerHTML = `
  <div class="todo__header">
    <h1 class="title">Что хотите сделать?</h1>
    <form action="#" class="todo__form" id="form-input">
      <input type="text" placeholder="Дело" class="input" id="input">
      <button class="add-btn btn" id="add-btn" type="submit">+</button>
    </form>
    <div class="error" id="error"></div>
  </div>
  <div class="todo__output">
    <article class="todo__output-content">
      <div class="todo__box">
        <h2 class="title-2">Мои дела</h1>
        <ul class="list" id="list">
          <div class="stub" id="stub">
            Дел нет
          </div>
        </ul>
      </div>
      <div class="todo__box">
        <h2 class="title-2">Делаю</h2>
        <ul class="list-do">
          <div class="list-do__stub">
            <span>Ты еще ничего не начал делать...</span>
          </div>
        </ul>
      </div>
      <div class="todo__box">
        <h2 class="title-2">Сделано</h2>
        <ul class="list-done">
          <div class="list-done__stub">
            <span>Ты еще ничего не сделал...</span>
            <img class="list-done__stub-img" src="https://utyug.info/upload/medialibrary/3f9/3f9bd29509b04a7aed1b4b90b0099277.jpg">
          </div>
        </ul>
      </div>
    </article>
  </div>
`