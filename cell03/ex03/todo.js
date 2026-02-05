    const list = document.getElementById('ft_list');
    const btn = document.getElementById('new-btn');

    function saveToCookie() {
      const todos = [];
      const divs = list.querySelectorAll('div');
      divs.forEach(function (d) { todos.push(d.textContent); });
      document.cookie = 'todos=' + encodeURIComponent(JSON.stringify(todos)) + '; path=/; max-age=31536000';
    }

    function loadFromCookie() {
      const match = document.cookie.split('; ').find(function (c) { return c.startsWith('todos='); });
      if (!match) return;
      try {
        const todos = JSON.parse(decodeURIComponent(match.split('=')[1]));
        todos.forEach(function (text) { addTodo(text, false); });
      } catch (e) {}
    }

    function addTodo(text, prepend) {
      const div = document.createElement('div');
      div.textContent = text;
      div.addEventListener('click', function () {
        if (confirm('Remove this TO DO?')) {
          div.parentNode.removeChild(div);
          saveToCookie();
        }
      });
      if (prepend && list.firstChild) {
        list.insertBefore(div, list.firstChild);
      } else {
        list.appendChild(div);
      }
    }

    btn.addEventListener('click', function () {
      const text = prompt('Enter a new TO DO:');
      if (text && text.trim() !== '') {
        addTodo(text.trim(), true);
        saveToCookie();
      }
    });

    loadFromCookie();