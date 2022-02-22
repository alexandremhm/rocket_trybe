const { getAllCurrency } = require('../api/index');
const { formatResponse } = require('../helpers/formatCurrencies');

const getCurrencies = async () => {
  const response = await getAllCurrency();
  return formatResponse(response);
};

module.exports = {
  getCurrencies,
};
