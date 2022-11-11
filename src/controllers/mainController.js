const renderTemplate = require('../lib/renderReactModule');
const Main = require('../views/Main');
const { Initiative, Golos } = require('../../db/models');

const renderMain = async (req, res) => {
  const allTitle = await Initiative.findAll({ include: Golos });
  const title = await allTitle.map((el) => el.get({ plain: true }));
  console.dir(title, { depth: null });
  const { user } = req.session;

  renderTemplate(Main, { title, user }, res);
};

module.exports = { renderMain };
