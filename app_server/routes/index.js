var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlMovie = require('../controllers/movie');

/* GET home page. */
router.get('/', ctrlMain.index);
module.exports = router;


/* pages */
router.get('/Worst', ctrlMovie.theWorstMovie);
router.get('/Best', ctrlMovie.theBestMovie);
module.exports = router;
