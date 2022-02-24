const Joi = require('joi');

const schema = Joi.object().keys({
  value: Joi.number().precision(2).positive().required(),
});

const currencyValuesValidator = (req, res, next) => {
  const { value } = req.body;
  const { error } = schema.validate({ value });

  if (error) {
    return res.status(400).json({ message: 'valor inválido' });
  }

  return next();
};

const currenciesCodeValidator = (req, res, next) => {
  const { code } = req.body;

  const possibleValues = ['BRL', 'CAD', 'EUR'];

  if (!possibleValues.includes(code)) {
    return res.status(400).json({ message: 'Moeda inválida' });
  }

  return next();
};

module.exports = {
  currencyValuesValidator,
  currenciesCodeValidator,
};
