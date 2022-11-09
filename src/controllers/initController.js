const renderTemplate = require('../lib/renderReactModule');
const Init = require('../views/Init');
const { Initiative, Sphere } = require('../../db/models');

const renderInit = async (req, res) => {

  const { user } = req.session;
  const { municip, region } = req.session.user;
  if (user) {
    const sphereList = await Sphere.findAll();
    renderTemplate(Init, { sphereList, user, municip, region }, res);

  } else { res.send('<h2>Страница доступна только авторизированным пользователям</h2>'); }


};

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
      UserID,
    });

    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderInit, addInitRender };
