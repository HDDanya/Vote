const React = require('react');
const Layout = require('./Layout')

module.exports = function Main({ title }) {
  return (
    <Layout>
      {title.map((el) => (
        <div className='card_container'>
          <div class="card " style={{ width: 18 + 'rem' }}>
            <img src="" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">
                {el.title}
                {' '}
              </h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      ))}
    </Layout>
  )
};
