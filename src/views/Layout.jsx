const React = require('react');

module.exports = function Layout({ children, isAuth }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/publicStyles.css" />
        <link rel="stylesheet" href="/css/personalArea.css" />
        <script defer src="/js/publicScript.js" />
        <title>Privet</title>
      </head>
      <body>
        {isAuth
          ? (
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="/main">На главную</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Создать Инициативу</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/lk">Личный кабинет</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Фильтр инициатив
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">По федеральному уровню</a></li>
                      <li><a className="dropdown-item" href="#">На уровне региона</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">На муниципальном уровне</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/logout">Выйти</a>
                  </li>

                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Найти на сайте" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Поиск</button>
                </form>
              </div>
            </nav>
          )
          : (
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="/login">Вход</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/signup">Регистрация</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Создать Инициативу</a>
                  </li>

                </ul>
              </div>
            </nav>
          )}

        {children}
      </body>
    </html>
  );
};
