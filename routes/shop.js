const express = require('express');
const path = require('path');


// my file imports
const rootDir = require('../util/path');

const router = express.Router();


// execute route = / or any route not handled
router.get('/',(req,res, next) => {
  res.sendFile(path.join(rootDir, 'views','shop.html'));
});


// expoort router
module.exports = router;