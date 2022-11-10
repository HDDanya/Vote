const renderTemplate = require('../lib/renderReactModule');
const Entry = require('../views/Entry');
const { Initiative, Golos } = require('../../db/models');

const renderEntry = async (req, res) => {
  const { user } = req.session;
  try {
    const title = await Initiative.findByPk(req.params.id);
    console.log('INITCARD', title);
    const voteOne = await Golos.findOne({ where: { InitiativeId: req.params.id, UserId: user.id } });
    const voteAllPro = await Golos.findAll({ where: { InitiativeId: req.params.id, vote_pro: 1 } });
    const voteAllAgainst = await Golos.findAll({ where: { InitiativeId: req.params.id, vote_against: 1 } });
    const votesObj = { pro: voteAllPro.length, against: voteAllAgainst.length };
    renderTemplate(Entry, {
      title, user, voteOne, votesObj,
    }, res);
  } catch (error) {
    console.log(error);
  }
};

const renderVote = async (req, res) => {
  try {
    const { UserId, InitId } = req.body;
    if (req.body.vote === 'yes') {
      const response = await Golos.create({ UserId, InitiativeId: InitId, vote_pro: 1 });
      res.sendStatus(200);
    } else {
      const response = await Golos.create({ UserId, InitiativeId: InitId, vote_against: 1 });
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderEntry, renderVote };
