const Joi = require('joi');

// https://www.npmjs.com/package/joi

const schema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().length(6).pattern(/^[0-9]+$/).required(),
});

const loginValidate = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: 'Campos inválidos',
    });
  }
  return next();
};

module.exports = loginValidate;
