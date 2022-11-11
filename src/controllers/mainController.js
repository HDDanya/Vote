const renderTemplate = require('../lib/renderReactModule');
const Main = require('../views/Main');
const { Initiative, Golos } = require('../../db/models');

const renderMain = async (req, res) => {
 try {
  const allTitle = await Initiative.findAll({ include: Golos });
  const title = await allTitle.map((el) => el.get({ plain: true }));
  const { user } = req.session;
    renderTemplate(Main, {
      title, user,
    }, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderMain };
