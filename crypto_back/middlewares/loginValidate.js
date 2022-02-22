const Joi = require('joi');

// https://www.npmjs.com/package/joi

const schema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().length(6).pattern(/^[0-9]+$/).required(),
});

const loginValidate = (req, res, next) => {
  const { error } = Joi.validate(req.body, schema);
  if (error) {
    return res.status(400).json({
      status: 'error',
      message: error.details[0].message,
    });
  }
  return next();
};

module.exports = loginValidate;
