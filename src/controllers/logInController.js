const bcrypt = require('bcrypt');
const session = require('express-session');
const renderTemplate = require('../lib/renderReactModule');
const Login = require('../views/Login');
const { User } = require('../../db/models');
const FileStore = require('session-file-store')(session);

const renderLogIn = (req, res) => {
  // const user = req.session?.user;
  renderTemplate(Login, null, res);
};

const postLogIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.send('Проверьте адрес почты');
    }
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        res.send('Пароль неверный');
      } else {
        req.session.username = user.firstname;
        res.redirect('/main');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const LogOut = (req, res) => {
  req.session.destroy();
  renderTemplate(Login, null, res);
};

module.exports = { renderLogIn, postLogIn };
