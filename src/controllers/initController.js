const renderTemplate = require('../lib/renderReactModule');
const Init = require('../views/Init');
const { Initiative, Sphere } = require('../../db/models');

const renderInit = async (req, res) => {
  const user = req.session?.userID;
  console.log('User=========', user);
  if (user) {
    const sphereList = await Sphere.findAll();
    renderTemplate(Init, { sphereList, user }, res);
  } else { res.send('<h2>Страница доступна только авторизированным пользователям</h2>'); }

  // const user = req.session?.user;
};

const addInitRender = async (req, res) => {
  try {
    const {
      title,
      body, level, SphereID,
    } = req.body;
    console.log('req.params', req.params);
    console.log('TEST', req.body);
    const UserID = req.session?.userID;
    await Initiative.create({
      title,
      body,
      SphereID,
      level,
      UserID,
    });

    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderInit, addInitRender };
