const express = require('express');
const router = express.Router();
const { requireSignin, adminMiddleware, authMiddleware, canUpdateDeleteBlog } = require('../controllers/auth');
const {
    adsImg, 
    logoImg, 
    topRightImg, 
    homeRightImg, 
    homeMiddleLongImg, 
    homeMiddleFirstImg, 
    homeMiddleSecImg,
    belowPostImg,
    getLogo,
    getTopAds,
    gethomeRightImg,
    gethomeMiddleLongImg,
    gethomeMiddleFirstImg,
    gethomeMiddleSecImg,
    getbelowPostImg
} = require('../controllers/adsController');



router.post('/upload', requireSignin, adminMiddleware, adsImg);
router.post('/logo', requireSignin, adminMiddleware, logoImg);
router.post('/topbanner', requireSignin, adminMiddleware, topRightImg);
router.post('/home-right-img', requireSignin, adminMiddleware, homeRightImg);
router.post('/home-long-img', requireSignin, adminMiddleware, homeMiddleLongImg);
router.post('/home-first-img', requireSignin, adminMiddleware, homeMiddleFirstImg);
router.post('/home-sec-img', requireSignin, adminMiddleware, homeMiddleSecImg);
router.post('/below-post-ads', requireSignin, adminMiddleware, belowPostImg);

router.get('/getlogo', getLogo);
router.get('/get-top-ads', getTopAds);
router.get('/home-right-img', gethomeRightImg);
router.get('/home-long-img', gethomeMiddleLongImg);
router.get('/home-first-img', gethomeMiddleFirstImg);
router.get('/home-sec-img', gethomeMiddleSecImg);
router.get('/below-post-ads', getbelowPostImg);


module.exports = router;