const { getAllCurrency } = require('../api/index');
const { formatResponse } = require('../helpers/formatCurrencies');
const { writeJsonData } = require('../helpers/jsonCurrencies');

const getCurrencies = async () => {
  const response = await getAllCurrency();
  const formatedResponse = formatResponse(response);
  return formatedResponse;
};

const updateCurrencyOnJson = async (code, value) => {
  writeJsonData(code, value);
};

module.exports = {
  getCurrencies,
  updateCurrencyOnJson,
};
