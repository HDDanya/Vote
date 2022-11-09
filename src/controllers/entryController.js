const renderTemplate = require('../lib/renderReactModule');
const Entry = require('../views/Entry');
const { Initiative, Golos } = require('../../db/models');

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
    const { UserId, InitId } = req.body;
    if (req.body.vote === 'yes') {
      const response = await Golos.create({ UserId, InitiativeId: InitId, vote_pro: 1 });
    } else {
      const response = await Golos.create({ UserId, InitiativeId: InitId, vote_against: 1 });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderEntry, renderVote };
