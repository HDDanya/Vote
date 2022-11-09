const renderTemplate = require('../lib/renderReactModule');
const Main = require('../views/Main');
const { Initiative } = require('../../db/models');

const renderMain = async (req, res) => {
  const allTitle = await Initiative.findAll();
  const title = await allTitle.map((el) => el.dataValues);
  const { user } = req.session;
  // console.log('==========>>>>>>>>>', title);
  renderTemplate(Main, { title, user }, res);
};

module.exports = { renderMain };
