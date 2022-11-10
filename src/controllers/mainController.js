const renderTemplate = require('../lib/renderReactModule');
const Main = require('../views/Main');
const { Initiative, Golos } = require('../../db/models');

const renderMain = async (req, res) => {
  try {
    const { user } = req.session;
    const allTitle = await Initiative.findAll();
    const title = await allTitle.map((el) => el.dataValues);

    renderTemplate(Main, {
      title, user,
    }, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderMain };
