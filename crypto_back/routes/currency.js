const router = require('express').Router();
const controller = require('../controllers/currency');

const { tokenValidator } = require('../middlewares/tokenAuth');

router.get('/api', tokenValidator, controller.getCurrencies);

module.exports = router;
