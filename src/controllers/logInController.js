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
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log('user!!');
      res.sendStatus(400);
    }
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        res.sendStatus(401);
      } else {
        req.session.username = user.firstname;
        req.session.userID = user.id;

        res.sendStatus(200);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const LogOut = (req, res) => {
  console.log(req.session.username);
  req.session.destroy();
  console.log(req.session.username);
  res.send('Сессия удалена');
};

module.exports = { renderLogIn, postLogIn, LogOut };
