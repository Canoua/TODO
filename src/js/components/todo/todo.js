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
      <h2 class="title-2">Мои дела</h1>
      <ul class="list" id="list">
        <div class="stub" id="stub"><!-- Пока что дел нет:) --></div>
      </ul>
      <h2 class="title-2">Сделано</h2>
      <ul class="list-done"></ul>
    </article>
  </div>
`