const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ title }) {
  return (
    <Layout>

      {title.map((el) => (
        <div className="card_container">
          <div className="card " style={{ width: `${18}rem` }}>
            <img src="" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">
                {el.title}
                {' '}
              </h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      ))}
    </Layout>
  );
};
