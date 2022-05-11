const express = require('express');
const router = express.Router();
const {adsImg} = require('../controllers/adsController');



router.post('/upload', adsImg);


module.exports = router;