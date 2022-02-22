const Service = require('../services/login');

const authLogin = async (req, res) => {
  try {
    const { email } = req.body;
    const token = await Service.authLogin(email);
    return res.status(200).json({ token });
  } catch (e) {
    return res.status(404).json({ message: 'Campos inválidos' });
  }
};

module.exports = {
  authLogin,
};
