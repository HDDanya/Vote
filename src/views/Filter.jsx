const React = require('react');
const Layout = require('./Layout');

module.exports = function ({ user, allTitle }) {
  console.log('allTitle', allTitle);
  return (
    <Layout isAuth={user}>
      <div className="card_container">
        {allTitle.map((el) => (
          <div className="card" style={{ width: `${18}rem` }}>
            <img src="" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">
                {el.title}
              </h5>
              <p className="card-text">
                {el.body}
              </p>
              <a id={el.id} href={`/entry/${el.id}`} className="btn btn-primary">Подробнее</a>

            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
