const renderTemplate = require('../lib/renderReactModule');
const Filter = require('../views/Filter');
const { Initiative } = require('../../db/models');

const renderFilter = async (req, res) => {
  try {
    const { user } = req.session;
    if (req.query.show === 'federal') {
      const allTitle = await Initiative.findAll({ where: { level: 'Федеральный' } });
      renderTemplate(Filter, { user, allTitle }, res);
    }
    if (req.query.show === 'region') {
      const allTitle = await Initiative.findAll({ where: { level: 'Региональный' } });
      renderTemplate(Filter, { user, allTitle }, res);
    }
    if (req.query.show === 'active') {
      const allTitle = await Initiative.findAll({ where: { status: req.query.show } });
      renderTemplate(Filter, { user, allTitle }, res);
    }
    if (req.query.show === 'closed') {
      const allTitle = await Initiative.findAll({ where: { status: req.query.show } });
      renderTemplate(Filter, { user, allTitle }, res);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderFilter };
