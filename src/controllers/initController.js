const renderTemplate = require('../lib/renderReactModule');
const Init = require('../views/Init');
const { Initiative, Sphere } = require('../../db/models');

const renderInit = async (req, res) => {
  const newUser = req.session?.user;
  try {
    if (newUser) {
      // const { user } = req.session.user;
      const { municip, region } = req.session.user;
      const sphereList = await Sphere.findAll();
      renderTemplate(Init, {
        sphereList, newUser, municip, region,
      }, res);
    } else { res.send('Страница доступна только авторизированным пользователям'); }
  } catch (error) {
    console.log(error);
  }
};

/* const renderInit = async (req, res) => {
  const user = req.session?.newUser;
  const { municip, region } = req.session.user;
  console.log(user);
  try {
    if (user) {
      const sphereList = await Sphere.findAll();
      renderTemplate(Init, {
        sphereList, user, municip, region,
      }, res);
    } else {
      res.send('Страница доступна только авторизированным пользователям');
    }
  } catch (error) {
    console.log(error);
  }
}; */

const addInitRender = async (req, res) => {
  try {
    const {
      title,
      body, level, SphereID,
    } = req.body;

    const UserID = req.session?.user.id;
    /* const UserRegion = req.session?.user.region;
       const UserMunicip = req.session?.user.municip; */

    await Initiative.create({
      title,
      body,
      SphereID,
      level,
      status: 'active',
      UserID,
      date_end: new Date(new Date().setFullYear(2022, 11, 25)),
    });

    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderInit, addInitRender };
