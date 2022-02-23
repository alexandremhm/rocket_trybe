const fs = require('fs');
const path = require('path');

const getJsonData = () => {
  const file = path.join(`${__dirname}/../currencies.json`);
  const raw = fs.readFileSync(file);
  return JSON.parse(raw);
};

const writeJsonData = (key, value) => {
  const file = path.join(`${__dirname}/../currencies.json`);
  const raw = fs.readFileSync(file);

  raw[key] = String(value);

  fs.writeFileSync(file, JSON.stringify(raw));
};

module.exports = {
  getJsonData,
  writeJsonData,
};
