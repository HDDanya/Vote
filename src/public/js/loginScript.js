const form = document.querySelector('.logInForm');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
  window.location.href = '/signup';
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (event.target.password1.value !== event.target.password.value) {
    alert('Указанные пароли не совпадают');
    event.target.password1.value = null;
    event.target.password.value = null;
    return;
  }

  const email = event.target.email.value;
  const password = event.target.password.value;

  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  if (response.status === 401) {
    alert('Неверная пара логин/пароль');
  }
  if (response.status === 200) {
    const result = await response.json();
    if (!result.name || !result.name) {
      alert('Добро пожаловать!');
    } else {
      alert(`Здравствуйте, ${result.name} ${result.middlename}!`);
    }
    window.location.href = '/main';
  }
  if (response.status === 400) { alert('Пользователь не зарегистрирован'); }
});
