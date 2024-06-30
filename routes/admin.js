const express = require('express');
const path = require('path');


// my file imports
const rootDir = require('../util/path');

// Using Router feature of express
const router = express.Router();

// /admin/add-product => GET
// execute route = /add-product
router.get('/add-product',(req,res, next) => {
  res.sendFile(path.join(rootDir,'views','add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req,res,next) => {
  console.log(req.body);
  res.redirect('/shop');
});

//  exporting `router` feature
module.exports = router;

