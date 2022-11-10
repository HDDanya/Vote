const React = require('react');
const Layout = require('./Layout');

module.exports = function ({
    title, user, voteOne, votesObj,
}) {
    console.log('=======>>>>>>obj', votesObj);
    const startDate = title.createdAt.toDateString();
    return (
        <Layout isAuth={user}>
            <div className="card w-75 mx-auto" style={{ width: `${26}rem` }}>
                {/* <img src="..." class="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{title.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Инициатива опубликована:
                        {startDate}
                    </li>
                    <li className="list-group-item">
                        Проголосать можно до:
                        {title.createdAt.setFullYear(2022, 12, 24)}
                        {' '}
                    </li>
                    <li className="list-group-item">A third item</li>
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
                        Всего голосов
                        {' '}
                        {votesObj.pro + votesObj.against}
                    </h1>
                    {votesObj.pro === 0 && votesObj.against === 0 ? ('') : (
                        <h4>
                            Голосов за
                            {' '}
                            {Math.round(((votesObj.pro) / (votesObj.pro + votesObj.against)) * 100)}
                            %
                        </h4>
                    )}
                </div>
            </div>
            <script defer src="/js/voteScript.js" />
        </Layout>
    );
};
