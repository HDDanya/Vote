const React = require('react');
const { DATE } = require('sequelize');

const Layout = require('./Layout');

module.exports = function EntryNoUser({
    title, result, votesObj, InitCreator,
}) {
    return (
        <Layout>
            {result ? (
                <div id="initCard" className="card w-75 mx-auto" style={{ width: `${26}rem` }}>
                    {/* <img src="..." class="card-img-top" alt="..." /> */}
                    <div className="card-body">
                        <h5 className="card-title">{title.title}</h5>
                        <p className="card-text">{title.body}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            {`Инициатива опубликована: ${title.createdAt.toDateString()}`}
                            {' '}
                        </li>
                        <li className="list-group-item">
                            {/* {`Проголосать можно до:${new Date(title.createdAt.setDate(title.createdAt.getDate() + 30)).toDateString()}`} */}
                            {`Проголосать можно до:${title.date_end.toDateString()}`}

                        </li>
                        <li className="list-group-item">Данные о голосовании:</li>
                    </ul>

                    <div id="votesButtons" className="card-body">
                        <a name="vote" href="/vote" id={title.id} className="card-link disable">Проголосовать "ЗА"</a>
                        <a name="vote" href="/vote" id={title.id} className="card-link disable">Проголосовать "ПРОТИВ"</a>
                        <h3>Выполните вход, чтобы проголосовать</h3>
                    </div>

                    <div>
                        <h1 className="votescounter">
                            {' '}
                            Общее количество голосов:
                            <div className="votesnumber">{votesObj.pro + votesObj.against}</div>
                        </h1>
                        {votesObj.pro === 0 && votesObj.against === 0 ? ('') : (
                            <h4>

                                {' '}
                                {`${Math.round(((votesObj.pro) / (votesObj.pro + votesObj.against)) * 100)}% проголосовали за поддержание инициативы`}

                            </h4>
                        )}
                    </div>
                    <div id="initLevel" className="card-body">
                        <h3>
                            Уровень инициативы:
                            {' '}
                            {title.level}
                        </h3>
                    </div>
                    <div id="initCreator" className="card-body">
                        <h3>
                            Автор инициативы:
                            {' '}
                            {InitCreator.lastname}
                            {' '}
                            {InitCreator.firstname}
                        </h3>
                    </div>
                    <div>
                        <a href={`/userinits/${title.UserID}`}>
                            Все инициативы данного автора
                        </a>

                    </div>
                </div>

            ) : (
                <>
                    <div>
                        <h3>*Данная инициатива находится в архиве</h3>
                    </div>
                    <div id="initCard" className="card w-75 mx-auto disable" style={{ width: `${26}rem` }}>
                        {/* <img src="..." class="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">{title.title}</h5>
                            <p className="card-text">{title.body}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                {`Инициатива опубликована: ${title.createdAt.toDateString()}`}
                                {' '}
                            </li>
                            <li className="list-group-item">
                                {/* {`Проголосать можно до:${new Date(title.createdAt.setDate(title.createdAt.getDate() + 30)).toDateString()}`} */}
                                {`Проголосать можно до:${title.date_end.toDateString()}`}

                            </li>
                            <li className="list-group-item">Данные о голосовании:</li>
                        </ul>

                        <div id="votesButtons" className="card-body">
                            <a name="vote" href="/vote" id={title.id} className="card-link disable">Проголосовать "ЗА"</a>
                            <a name="vote" href="/vote" id={title.id} className="card-link disable">Проголосовать "ПРОТИВ"</a>
                            <h3>Выполните вход, чтобы проголосовать</h3>
                        </div>

                        <div>
                            <h1 className="votescounter">
                                {' '}
                                Общее количество голосов:
                                <div className="votesnumber">{votesObj.pro + votesObj.against}</div>
                            </h1>
                            {votesObj.pro === 0 && votesObj.against === 0 ? ('') : (
                                <h4>

                                    {' '}
                                    {`${Math.round(((votesObj.pro) / (votesObj.pro + votesObj.against)) * 100)}% проголосовали за поддержание инициативы`}

                                </h4>
                            )}
                            <div id="initLevel" className="card-body">
                                <h3>
                                    Уровень инициативы:
                                    {' '}
                                    {title.level}
                                </h3>
                            </div>
                            <div id="initCreator" className="card-body">
                                <div>
                                    <h3>
                                        Автор инициативы:
                                        {' '}
                                        {InitCreator.lastname}
                                        {' '}
                                        {InitCreator.firstname}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* <div><a href={`/userinits/${title.UserID}`}>Все инициативы данного пользователя</a></div> */}

                    </div>

                    <div>
                        <a href={`/userinits/${title.UserID}`}>
                            Все инициативы данного автора:

                        </a>
                    </div>

                </>

            )}

            {/* </div>
        <div><a href={`/userinits/${title.UserID}`}>Все инициативы данного пользователя</a></div> */}

            <script defer src="/js/voteScript.js" />
            <script defer src="/js/dateCompare.js" />
        </Layout>
    );
};