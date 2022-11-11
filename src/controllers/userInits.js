const renderTemplate = require('../lib/renderReactModule');
const UserInits = require('../views/UserInits');
const { Initiative, Golos } = require('../../db/models');

const renderUserInits = async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  try {
    const allTitle = await Initiative.findAll({ include: Golos });
    const title = await allTitle.map((el) => el.get({ plain: true }));
    const { user } = req.session;
    renderTemplate(UserInits, { title, user }, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderUserInits };
