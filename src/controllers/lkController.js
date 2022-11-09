const renderTemplate = require('../lib/renderReactModule');
const personalArea = require('../views/personalArea');

const renderLk = (req, res) => {
  const { user } = req.session;
  renderTemplate(personalArea, { user }, res);
};

module.exports = { renderLk };
