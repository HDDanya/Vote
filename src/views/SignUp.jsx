const React = require('react');
const Layout = require('./Layout');

module.exports = function SignUp() {
  return (
    <Layout>
      <form className="signUpForm" action="/signup" method="POST">
        <p>Для регистрации необходимо заполнить следующие поля:</p>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Фамилия </label>
          <input name="lastname" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Иванов" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label"> Имя </label>
          <input name="firstname" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Иван" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Отчество</label>
          <input name="middlename" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Иванович" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Адрес электрорнной почты</label>
          <input name="email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="ivanov@mail.ru" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Пароль</label>
          <input name="password" type="password" className="form-control" id="exampleFormControlInput1" placeholder="Используйте латинсие символы" />
        </div>
        <p>Заполните данные о месте вашего проживания (регистрации):</p>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Федеральный округ</label>
          <input name="federal" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Центральный федеральный округ" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Регион</label>
          <input name="region" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Белгородская область" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Город, район, посёлок, деревня</label>
          <input name="municip" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Белгород" />
        </div>
        <div className="buttonsForm">
          <button type="submit" className="btn btn-outline-success">Зарегистрироваться</button>
          <button type="button" className="btn btn-outline-dark" href="/login">У меня есть аккаунт</button>

        </div>

      </form>

    </Layout>
  );
};
