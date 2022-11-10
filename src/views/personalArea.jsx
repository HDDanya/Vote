const React = require('react');
const Layout = require('./Layout');

module.exports = function ({ user }) {
  return (
    <Layout isAuth={user}>
      <container className="personalArea">
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Фамилия</label>
          <div className="col-sm-10">
            <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={user.lastname} />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Имя</label>
          <div className="col-sm-10">
            <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={user.firstname} />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Отчество</label>
          <div className="col-sm-10">
            <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={user.middlename} />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Электронная почта</label>
          <div className="col-sm-10">
            <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={user.email} />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-custom-class="custom-popover"
          data-bs-title="Ваш адрес"
          data-bs-content={`Регион: ${user.region}, населенный пункт: ${user.municip}`}
        >
          Просмотреть данные адреса
        </button>

      </container>

      <script defer src="./js/lkScript.js" />
    </Layout>
  );
};
