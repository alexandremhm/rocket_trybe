const jwt = require('jsonwebtoken');
const { jwtKey, jwtConfig } = require('../helpers/index');

const authLogin = async (email) => {
  const token = jwt.sign({ email }, jwtKey, jwtConfig);

  return {
    token,
  };
};

module.exports = {
  authLogin,
};
