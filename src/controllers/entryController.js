const renderTemplate = require('../lib/renderReactModule');
const Entry = require('../views/Entry');
const { Initiative } = require("../../db/models")

const renderEntry = async (req, res) => {
    try {
        console.log('============>>>>>>>>>>', req.params.id);
        const title = await Initiative.findByPk(req.params.id);
        renderTemplate(Entry, { title }, res);
    } catch (error) {
        console.log(error);
    }

};

module.exports = { renderEntry }