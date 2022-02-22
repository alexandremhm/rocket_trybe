const axios = require('axios');

// https://api.coindesk.com/v1/bpi/currentprice.json
// https://api.coindesk.com/v1/bpi/currentprice/<CODE>.json

const getAllCurrency = async () => {
  const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  const response = await axios.get(URL);
  return response.data;
};

const getSpecificCurrency = async (CODE) => {
  const URL = `https://api.coindesk.com/v1/bpi/currentprice/${CODE}.json`;
  const response = await axios.get(URL);
  return response.data;
};

module.exports = {
  getAllCurrency,
  getSpecificCurrency,
};
