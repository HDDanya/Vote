const React = require('react');

module.exports = function Layout({ children, newUser }) {
    return (
      <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/publicStyles.css" />
        <script defer src='/js/publicScript.js'></script>
        <title>Privet</title>
      </head>
      <body>
        <h1>Привет из Layout</h1>
        {children}
      </body>
    </html>
  )
};
