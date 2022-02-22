require('dotenv').config();

const jwtKey = process.env.JWT_KEY;

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

module.exports = {
  jwtKey,
  jwtConfig,
};
