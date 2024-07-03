
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


// TASK - RESEARCH LATER
// const expressHbs = require('express-handlebars');
// const { engine } = require('express-handlebars'); // Destructure engine from express-handlebars


// my imported files
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const app = express();



// EJS TEMPLATE SETUP
// setting view engine and views folder
app.set('view engine', 'ejs');
// [optional] default = [views] folder
app.set('views','ejs_templates');



// TASK - RESEARCH LATER
// HANDLEBARS TEMPLATE
// set up express handlebar
// app.engine('hbs', engine({ 
//   extname: '.hbs', 
//   defaultLayout: 'main', 
//   layoutsDir: path.join(__dirname, 'views/layouts')
// }));
// // setting view engine and views folder
// app.set('view engine', 'hbs');
// // [optional] default = [views] folder
// app.set('views', path.join(__dirname, 'views'));

// HANDLEBARS TEMPLATE
// set up express handlebar
// app.engine('custom_engine_name', importes_handlebars_engine);
// engine init
// app.engine('hbs', expressHbs());
// app.engine('hbs', expressHbs({ defaultLayout: false }));
// // setting view engine and views folder
// app.set('view engine', 'hbs');
// // [optional] default = [views] folder
// app.set('views','handlebars_templates');

// HANDLEBARS TEMPLATE
// set up express handlebar
// app.engine('hbs', engine({ extname: '.hbs' })); // Use the engine function and set the file extension
// // setting view engine and views folder
// app.set('view engine', 'hbs');
// // [optional] default = [views] folder
// // app.set('views', path.join(__dirname, 'handlebars_templates')); // Ensure the correct path
// app.set('views', 'handlebars_templates');



// PUG TEMPLATE SETUP
// // setting view engine and views folder
// app.set('view engine', 'pug');
// // [optional] default = [views] folder
// app.set('views','pug_templates');

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

app.use('/admin', adminData.routes);
app.use('/shop',shopRoutes);

// 404 page
app.use((req,res,next) => {
  // res.status(404).send('<h1>Page Not Found :)</h1>');
  // res.status(404).sendFile(path.join(__dirname,'./', 'views', '404.html'));
  res.status(404).render('404',{pageTitle: 'Omi\'s Shop | Page Not Found', path: ''})
})
// listen 
app.listen(3000);