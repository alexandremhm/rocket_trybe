const fs = require('fs');
const path = require('path');

const getJsonData = () => {
  const file = path.join(`${__dirname}/../currencies.json`);
  const raw = fs.readFileSync(file);
  return JSON.parse(raw);
};

module.exports = { getJsonData };
