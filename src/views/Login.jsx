const React = require('react');
const Layout = require('./Layout');

module.exports = function SignUp() {
  return (
    <Layout>
      <form className="logInForm" action="/login" method="POST">
        <p>Для входа введите адрес электронной почты и пароль</p>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Адрес электрорнной почты</label>
          <input name="email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="ivanov@mail.ru" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Пароль</label>
          <input name="password" type="password" className="form-control" id="exampleFormControlInput1" placeholder="Используйте латинсие символы" />
        </div>
        <div className="buttonsForm">
          <button type="submit" className="btn btn-outline-success">Войти</button>
          <button type="button" className="btn btn-outline-dark" href="/login">У меня нет аккакунта</button>

        </div>
      </form>

    </Layout>
  );
};
