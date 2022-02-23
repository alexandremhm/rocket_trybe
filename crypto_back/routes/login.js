const router = require('express').Router();
const controller = require('../controllers/login');
const loginValidate = require('../middlewares/loginValidate');

router.post('/login', loginValidate, controller.authLogin);

module.exports = router;
