const { getJsonData } = require('./jsonCurrencies');

const { BRL, CAD, EUR } = getJsonData();

const rateFormater = (value, usdRate) => {
  const currency = Number(value);
  const rate = Number(currency * usdRate);

  const response = rate.toLocaleString('en-US', { minimumFractionDigits: 4 });
  return response;
};

const rateFormaterFloat = (value, usdRateFloat) => {
  const currency = Number(value);
  const rate = Number(currency * usdRateFloat);

  const response = rate.toFixed(4);
  return response;
};

const formatResponse = (data) => {
  const response = data;

  delete response.bpi.GBP;

  response.bpi.BRL = {
    code: 'BRL',
    rate: rateFormater(BRL, response.bpi.USD.rate_float),
    description: 'Brazilian Real',
    rate_float: rateFormaterFloat(BRL, response.bpi.USD.rate_float),
  };

  response.bpi.CAD = {
    code: 'CAD',
    rate: rateFormater(CAD, response.bpi.USD.rate_float),
    description: 'Canadian Dollar',
    rate_float: rateFormaterFloat(CAD, response.bpi.USD.rate_float),
  };

  response.bpi.EUR = {
    code: 'EUR',
    rate: rateFormater(EUR, response.bpi.USD.rate_float),
    description: 'Euro',
    rate_float: rateFormaterFloat(EUR, response.bpi.USD.rate_float),
  };

  return response;
};

module.exports = {
  rateFormater,
  rateFormaterFloat,
  formatResponse,
};
