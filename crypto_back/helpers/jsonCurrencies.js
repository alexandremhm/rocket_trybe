const fs = require('fs');
const path = require('path');

const getJsonData = () => {
  const file = path.join(`${__dirname}/../currencies.json`);
  const raw = fs.readFileSync(file);
  return JSON.parse(raw);
};

const writeJsonData = (key) => {
  const file = path.join(`${__dirname}/../currencies.json`);
  const raw = fs.readFileSync(file);

  raw[key] = String(key);

  fs.writeFileSync(file, JSON.stringify(raw));
};

module.exports = {
  getJsonData,
  writeJsonData,
};
