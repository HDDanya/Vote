const renderTemplate = require('../lib/renderReactModule');
const Filter = require('../views/Filter');
const { Initiative, Golos } = require('../../db/models');

const renderFilter = async (req, res) => {
  try {
    const { user } = req.session;
    if (req.query.show === 'federal') {
      const allTitle = await Initiative.findAll({ where: { level: 'Федеральный' }, include: Golos });
      const title = await allTitle.map((el) => el.get({ plain: true }));
      renderTemplate(Filter, { user, title }, res);
    }
    if (req.query.show === 'region') {
      const allTitle = await Initiative.findAll({ where: { level: 'Региональный' }, include: Golos });
      const title = await allTitle.map((el) => el.get({ plain: true }));
      renderTemplate(Filter, { user, title }, res);
    }
    if (req.query.show === 'municipal') {
      const allTitle = await Initiative.findAll({ where: { level: 'Муниципальный' }, include: Golos });
      const title = await allTitle.map((el) => el.get({ plain: true }));
      renderTemplate(Filter, { user, title }, res);
    }
    if (req.query.show === 'active') {
      const allTitle = await Initiative.findAll({ where: { status: req.query.show }, include: Golos });
      const title = await allTitle.map((el) => el.get({ plain: true }));
      renderTemplate(Filter, { user, title }, res);
    }
    if (req.query.show === 'closed') {
      const allTitle = await Initiative.findAll({ where: { status: req.query.show }, include: Golos });
      const title = await allTitle.map((el) => el.get({ plain: true }));
      renderTemplate(Filter, { user, title }, res);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderFilter };
