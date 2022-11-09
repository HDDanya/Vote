const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderReactModule');
const SignUp = require('../views/SignUp');
const { User } = require('../../db/models');

const renderSignUp = (req, res) => {
  // const user = req.session?.user;
  renderTemplate(SignUp, null, res);
};

const postSignUp = async (req, res) => {
  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const {
      lastname, firstname, middlename, email, federal, region, municip,
    } = req.body;
    const user = await User.create({
      lastname, firstname, middlename, password: hashedPass, email, federal, region, municip,
    });
    res.redirect('/login');
  } catch (error) {
    if (error.fields.email === req.body.email) {
      res.send('Этот почтовый ящик уже используется');
    }
  }
  // const user = req.session?.user;
};

module.exports = { renderSignUp, postSignUp };
