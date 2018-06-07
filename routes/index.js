var express = require('express');
var router = express.Router();

const homeController = require('../controllers/homeController')
const uploadController = require('../controllers/updateController')
const imgSingle = require('../controllers/imgSingle')

router.get('/', homeController.home);
router.put('/updated', homeController.update);
router.get('/upload', uploadController.upload);
//router.get('/probando/:id', uploadController.hagocosas);
router.post('/uploader', uploadController.insertImage);
router.get('/single/:id', imgSingle.render);

module.exports = router;
