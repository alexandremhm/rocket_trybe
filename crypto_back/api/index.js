const axios = require('axios');

// https://api.coindesk.com/v1/bpi/currentprice.json
// https://api.coindesk.com/v1/bpi/currentprice/<CODE>.json

const URL = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const getCurrency = async () => {
  const response = await axios.get(URL);
  return response.data;
};

module.exports = {
  getCurrency,
};
