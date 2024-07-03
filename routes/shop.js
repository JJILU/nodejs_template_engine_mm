const express = require('express');
const path = require('path');


// my file imports
const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();


// execute route = / or any route not handled
router.get('/',(req,res, next) => {
  // console.log('shop.js',adminData.products);
  // res.sendFile(path.join(rootDir, 'views','shop.'));

  // stores products array from admin.js
  const products = adminData.products;
  // express render
  res.render('shop',{prods: products, pageTitle: 'Omi\'s Shop', path:'/shop'});
});


// export router
module.exports = router;