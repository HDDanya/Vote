const React = require('react');
const Layout = require('./Layout');

module.exports = function Initiative({ sphereList, municip, region }) {
  return (
    <Layout>
      <script />
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
          <select name="SphereID" className="form-select" aria-label="Default select example">

            <option selected>Раздел</option>
            {sphereList.map((sphere) => (
              <option value={sphere.id} key={sphere.id}>{sphere.title}</option>
              /*  <option value="Транспорт и дороги">Транспорт и дороги</option>
               <option value="Образование и наука">Образование и наука</option>
               <option value="Здравоохранение">Здравоохранение</option> */
            ))}
          </select>
          <select name="level" id="level-select" className="form-select" aria-label="Default select example">
            <option selected>Уровень инициативы</option>
            <option value="Федеральный">Федеральный</option>
            <option value="Региональный">Региональный</option>
            <option value="Муниципальный">Муниципальный</option>
          </select>

          <div>
            <input name="region" id="regInput" className="optionForSelect" value={region} />
          </div>
          <div>
            <input name="municip" id="munInput" className="optionForSelect" value={municip} />
          </div>

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
