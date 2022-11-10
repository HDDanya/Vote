const renderTemplate = require('../lib/renderReactModule');
const UserInits = require('../views/UserInits');
const { Initiative } = require('../../db/models');

const renderUserInits = async (req, res) => {

    const { user } = req.session;
    try {
        const allTitle = await Initiative.findAll({ where: { UserID: req.params.id } });
        const title = await allTitle.map((el) => el.dataValues);
        renderTemplate(UserInits, { title, user }, res);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { renderUserInits };