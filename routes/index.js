var express = require('express');
var router = express.Router();
var homeController = require('../controllers/index');

/* GET home page. */
router.get('/',homeController.home );
router.get('/contact',homeController.contact );
router.get('/about',homeController.about );

module.exports = router;
