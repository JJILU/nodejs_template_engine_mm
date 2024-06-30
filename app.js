
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


// my imported files
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const app = express();

// // Middleware: use() 
// app.use((req,res, next) => {
//   console.log('In the middleware!');
//   next(); // Allows the request to continue to the next middleware in line
// });


// execute route = /add-product
// app.use('/',(req,res, next) => {
//   console.log('This always runs!');
//   next();
// });

// middleware to parse incoming body attached to 'POST' requset (only for form)
app.use(bodyParser.urlencoded({extended: false}));
// serve css files statically
app.use(express.static(path.join(__dirname, 'public')));


// console.log(__dirname,'\n',__filename);

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

// 404 page
app.use((req,res,next) => {
  // res.status(404).send('<h1>Page Not Found :)</h1>');
  res.status(404).sendFile(path.join(__dirname,'./', 'views', '404.html'));
})
// listen 
app.listen(3000);