const jwt = require('jsonwebtoken');
const { jwtKey, jwtConfig } = require('../helpers/index');

const tokenValidator = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      status: 'error',
      message: 'No token provided',
    });
  }
  try {
    const decoded = jwt.verify(token, jwtKey, jwtConfig);
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({
      status: 'error',
      message: 'Invalid token',
    });
  }
};

module.exports = {
  tokenValidator,
};
