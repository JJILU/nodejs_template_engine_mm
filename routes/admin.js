const express = require('express');
const path = require('path');


// my file imports
const rootDir = require('../util/path');

// Using Router feature of express
const router = express.Router();

// stores title from form
const products = [];

// /admin/add-product => GET
// execute route = /add-product
router.get('/add-product',(req,res, next) => {
  // res.sendFile(path.join(rootDir,'views','add-product.html'));

  // Render Pug Template
  res.render('add-product',{pageTitle: "Omi\s Shop | add product", path: '/admin/add-product'})
});

// /admin/add-product => POST
router.post('/add-product', (req,res,next) => {
  products.push({title: req.body.title});
  // console.log("test = ",req.body);
  res.redirect('/shop');
});

//  exporting `router` feature
// module.exports = router;

// all exports stored in admin data in app.js
exports.routes = router;
exports.products = products;

