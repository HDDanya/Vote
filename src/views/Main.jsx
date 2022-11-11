const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({
  title, user,
}) {
  return (
    <Layout isAuth={user}>

      <div className="card_container">
        {title.map((el) => (
          <div className="card" style={{ width: `${18}rem` }}>
            {/* <img src="" className="card-img-top" alt="" /> */}
            <div className="card-body">
              <h5 className="card-title">
                {el.title}
              </h5>
              <div>
                <h3>
                  {
                    el.Golos.filter((g) => g.vote_pro === 1).length === 0 && el.Golos.filter((g) => g.vote_against === 1).length === 0
                      ? ('Еще никто не голосовал') : (`${el.Golos.filter((g) => g.vote_pro === 1).length / (el.Golos.filter((g) => g.vote_against === 1).length
                        + el.Golos.filter((g) => g.vote_pro === 1).length) * 100}% проголосовали за`)
                  }
                </h3>
                <h3>

                  Общее количество голосов:
                  <h5 className="card-title">
                    {(el.Golos.filter((g) => g.vote_against === 1).length
                      + el.Golos.filter((g) => g.vote_pro === 1).length)}
                  </h5>
                </h3>
              </div>
              <div>
                Уровень:
                <h5 className="card-title">
                  {el.level}
                </h5>
              </div>
              {/* <p className="card-text">
                {el.body}
              </p> */}
              <a href={`/entry/${el.id}`} className="btn btn-primary">Подробнее</a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
