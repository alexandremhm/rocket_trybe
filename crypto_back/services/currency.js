const { getAllCurrency } = require('../api/index');
const { formatResponse } = require('../helpers/formatCurrencies');
const { writeJsonData, getCurrencyOnJson } = require('../helpers/jsonCurrencies');

const getCurrencies = async () => {
  const response = await getAllCurrency();
  const formatedResponse = formatResponse(response);
  return formatedResponse;
};

const updateCurrencyOnJson = async (code, value) => {
  writeJsonData(code, value);
};

const getCurrency = async (code) => {
  const currency = await getCurrencyOnJson(code);
  return currency;
};

module.exports = {
  getCurrencies,
  updateCurrencyOnJson,
  getCurrency,
};
