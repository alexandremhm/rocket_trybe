const Service = require('../services/login');

const authLogin = async (req, res) => {
  try {
    const { email } = req.body;
    const userToken = await Service.authLogin(email);
    return res.status(200).json(userToken);
  } catch (e) {
    return res.status(404).json(e.message);
  }
};

module.exports = {
  authLogin,
};
