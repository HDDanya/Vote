const renderTemplate = require('../lib/renderReactModule');
const Entry = require('../views/Entry');
const { Initiative } = require('../../db/models');

const renderEntry = async (req, res) => {
  const { user } = req.session;
  try {
    const title = await Initiative.findByPk(req.params.id);
    renderTemplate(Entry, { title, user }, res);
  } catch (error) {
    console.log(error);
  }
};

const renderVote = async (req, res) => {
  try {
    console.log('req.body', req.body);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderEntry, renderVote };
