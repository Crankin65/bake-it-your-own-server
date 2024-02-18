require('dotenv').config({ debug: true })
require('./models/user')

const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose')

// const connectDB = require('./config/db')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const errorHandler = require('errorhandler');

// configure mongoose
// mongoose.promise = global.Promise
// mongoose.connect('mongodb://localhost/passport-tutorial');
// mongoose.set('debug', true);


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const recipesRouter = require('./routes/recipe')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.use('/', indexRouter);
app.use('/', recipesRouter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/users', usersRouter);

//require routes
app.use(require('./routes'));

//passport js
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('../views/error');
  console.error(err.message)
});

app.listen(8000, () => console.log('Server running on http://localhost:8000/'));

module.exports = app;
