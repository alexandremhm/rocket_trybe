const Service = require('../services/currency');

const getCurrencies = async (_req, res) => {
  try {
    const response = await Service.getCurrencies();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno' });
  }
};

module.exports = {
  getCurrencies,
};
