const React = require('react');
const Layout = require('./Layout')

module.exports = function Main({ children, newUser }) {
    return (
    <Layout>
      <h1>Привет из вьюшки Main</h1>
    </Layout>
  )
};
