const fs = require('fs');
const path = require('path');

const getJsonData = () => {
  const file = path.join(`${__dirname}/../currencies.json`);
  const raw = fs.readFileSync(file);
  return JSON.parse(raw);
};

const getCurrencyOnJson = (code) => {
  const data = getJsonData();
  return data[code];
};

const writeJsonData = (key, value) => {
  const file = path.join(`${__dirname}/../currencies.json`);
  const raw = fs.readFileSync(file);

  const data = JSON.parse(raw);

  data[key] = String(value);

  fs.writeFileSync(file, JSON.stringify(data));
};

module.exports = {
  getJsonData,
  writeJsonData,
  getCurrencyOnJson,
};
