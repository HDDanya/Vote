const renderTemplate = require('../lib/renderReactModule');
const Init = require('../views/Init');
const { Initiative } = require('../../db/models');

const renderInit = (req, res) => {
  // const user = req.session?.user;
  renderTemplate(Init, null, res);
};

const addInitRender = async (req, res) => {
  try {
    const newInit = await Initiative.create({
      title: req.body.title,
      body: req.body.body,
      level: req.body.level,
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderInit, addInitRender };
