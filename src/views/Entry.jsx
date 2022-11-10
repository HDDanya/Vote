const React = require('react');

const Layout = require('./Layout');

module.exports = function ({
  title, user, voteOne, votesObj,
}) {
  return (
    <Layout isAuth={user}>
      <div className="card w-75 mx-auto" style={{ width: `${26}rem` }}>
        {/* <img src="..." class="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{title.title}</h5>
          <p className="card-text">Подробное описание инициативы</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {`Инициатива опубликована: ${title.createdAt.toDateString()}`}
            {' '}
          </li>
          <li className="list-group-item">
            {`Проголосать можно до: ${new Date(title.createdAt.setDate(title.createdAt.getDate() + 30)).toDateString()}`}

          </li>
          <li className="list-group-item">Данные о голосовании:</li>
        </ul>
        {voteOne
          ? (
            <div id="votesButtons" className="card-body">
              <a name="vote" href="/vote" id={title.id} data-userid={user.id} className="card-link disable">Проголосовать "ЗА"</a>
              <a name="vote" href="/vote" id={title.id} data-userid={user.id} className="card-link disable">Проголосовать "ПРОТИВ"</a>
              <h3>Вы уже проголосовали</h3>
            </div>
          )
          : (
            <div id="votesButtons" className="card-body">
              <a name="vote" href="/vote" id={title.id} data-userid={user.id} className="card-link yes">Проголосовать "ЗА"</a>
              <a name="vote" href="/vote" id={title.id} data-userid={user.id} className="card-link no">Проголосовать "ПРОТИВ"</a>
            </div>
          )}
        <div>
          <h1>
            {' '}
            {`Общее количество голосов: ${votesObj.pro + votesObj.against}`}
          </h1>
          {votesObj.pro === 0 && votesObj.against === 0 ? ('') : (
            <h4>

              {' '}
              {`${Math.round(((votesObj.pro) / (votesObj.pro + votesObj.against)) * 100)}% проголосовали за поддержание инициативы`}

            </h4>
          )}
        </div>
        <div><a href={`/filter/${title.UserID}`}>Все инициативы данного пользователя</a></div>
      </div>
      <script defer src="/js/voteScript.js" />
    </Layout>
  );
};
