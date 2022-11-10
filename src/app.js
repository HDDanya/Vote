require('dotenv').config();
require('@babel/register');

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { sequelize } = require('../db/models');

const app = express();
const mainRouter = require('./routes/mainRouter');

const initRouter = require('./routes/initRouter');

const signUpRouter = require('./routes/signUpRouter');
const logInRouter = require('./routes/logInRouter');

const logOutRouter = require('./routes/logOutRouter');
const lkRouter = require('./routes/lkRouter');
const filterRouter = require('./routes/filterRouter');
const { LogOut } = require('./controllers/logInController');
const entryRouter = require('./routes/entryRouter');
const UserInits = require('./routes/userInits');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { PORT, SESSION_SECRET } = process.env;

const sessionConfig = {
  name: 'Session',
  store: new FileStore(),
  secret: SESSION_SECRET ?? '123',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

app.use('/', mainRouter);

app.use('/init', initRouter);

app.use('/signup', signUpRouter);
app.use('/login', logInRouter);

app.use('/entry', entryRouter);

app.use('/logout', logOutRouter);
app.use('/lk', lkRouter);
app.use('/filter', filterRouter);
app.use('/filter', filterRouter);
app.use('/userinits', UserInits)

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
