// Находим форму и блок для вывода результата
const form = document.getElementById("register-form");
const result = document.getElementById("result");

// Событие submit срабатывает при нажатии на кнопку,
// но только если браузер уже проверил поля (required, minlength, type="email")
form.addEventListener("submit", function (event) {
  // Отменяем отправку формы на сервер и перезагрузку страницы
  event.preventDefault();

  // Берём значения из полей
  const name = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const agree = document.getElementById("agree").checked;

  // Выводим их под формой.
  // textContent вставляет текст как есть, поэтому HTML из полей не выполнится.
  document.getElementById("out-name").textContent = name;
  document.getElementById("out-email").textContent = email;
  // Пароль показываем точками: открытым текстом его выводить нельзя
  document.getElementById("out-password").textContent = "•".repeat(password.length);
  document.getElementById("out-agree").textContent = agree ? "да" : "нет";

  // Показываем скрытый блок с результатом
  result.hidden = false;
});
