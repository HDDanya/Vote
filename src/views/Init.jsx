const React = require('react');
const Layout = require('./Layout');

module.exports = function Initiative({ children }) {
  return (
    <Layout>
      <form method="POST" action="/init" className="addInitForm">
        <div className="mb-3">
          <div>
            <label htmlFor="initTitle" className="form-label">Название</label>
            <input name="title" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Название инициативы" />
          </div>
          <div>
            <label htmlFor="initBody" className="form-label">Описание</label>
            <textarea name="body" className="form-control" id="exampleFormControlTextarea1" placeholder="Подробное описание инициативы с мотивацией" rows="10" />
          </div>
          <select name="level" className="form-select" aria-label="Default select example">
            <option selected>Уровень инициативы</option>
            <option value="Федеральный">Федеральный</option>
            <option value="Региональный">Региональный</option>
            <option value="Муниципальный">Муниципальный</option>
          </select>
          <div className="createInitBtn">
            <div className="d-grid gap-2 col-6 mx-auto">
              <button id="addInitBtn" className="btn btn-primary" type="submit">Создать</button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};
