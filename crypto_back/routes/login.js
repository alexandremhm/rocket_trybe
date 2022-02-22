const router = require('express').Router();
const controller = require('../controllers/login');
const loginValidate = require('../middlewares/loginValidate');

router.post('/api', loginValidate, controller.authLogin);

module.exports = router;
