const router = require('express').Router();
const controller = require('../controllers/currency');

const { tokenValidator } = require('../middlewares/tokenAuth');
const { currencyValuesValidator, currenciesCodeValidator } = require('../middlewares/currency');

router.get('/crypto/btc', tokenValidator, controller.getCurrencies);
router.post('/crypto/btc', tokenValidator, currenciesCodeValidator, currencyValuesValidator, controller.updateCurrencyOnJson);
router.get('/crypto/btc/:code', tokenValidator, controller.getCurrency);

module.exports = router;
