const { getJsonData } = require('./jsonCurrencies');

const { BRL, CAD, EUR } = getJsonData();

const rateFormater = (value, usdRate) => {
  const currency = Number(value);
  const rate = Number(currency * usdRate);

  return rate.toLocaleString('en-US', { minimumFractionDigits: 4 });
};

const rateFormaterFloat = (value, usdRateFloat) => {
  const currency = Number(value);
  const rate = Number(currency * usdRateFloat);

  return rate.toFixed(4);
};

const formatResponse = (data) => {
  const response = data;

  const { USD: { rate_float: rateFloat } } = response;

  response.bpi.BRL = {
    code: 'BRL',
    rate: rateFormater(BRL, rateFloat),
    description: 'Brazilian Real',
    rate_float: rateFormaterFloat(BRL, rateFloat),
  };

  response.bpi.CAD = {
    code: 'CAD',
    rate: rateFormater(CAD, rateFloat),
    description: 'Canadian Dollar',
    rate_float: rateFormaterFloat(CAD, rateFloat),
  };

  response.bpi.EUR = {
    code: 'EUR',
    rate: rateFormater(EUR, rateFloat),
    description: 'Euro',
    rate_float: rateFormaterFloat(EUR, rateFloat),
  };

  return response;
};

module.exports = {
  rateFormater,
  rateFormaterFloat,
  formatResponse,
};
