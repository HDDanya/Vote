const React = require('react');
const Layout = require('./Layout');

module.exports = function ({ title, user }) {
  return (
    <Layout isAuth={user}>
      <div className="card w-75 mx-auto" style={{ width: `${26}rem` }}>
        {/* <img src="..." class="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{title.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <a name="vote" href="/vote" id={title.id} data-userid={user.id} className="card-link yes">Проголосовать "ЗА"</a>
          <a name="vote" href="/vote" id={title.id} data-userid={user.id} className="card-link no">Проголосовать "ПРОТИВ"</a>
        </div>
      </div>
      <script defer src="/js/voteScript.js" />
    </Layout>
  );
};
