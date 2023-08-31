require('dotenv').config({ debug: true })

const createError = require('http-errors');
const express = require('express');

// const connectDB = require('./config/db')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

// connectDB();

const mongoose = require("mongoose")
// mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGO_URI


 // // Attempt from Freecode camp
// mongoose.connect(mongoDB)
// const database = mongoose.connection
//
// database.on('error', (error) => {
//   console.log(error)
// })
//
// database.once('connected', () => {
//   console.log('Database Connected');
// })

// end FCC

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
// app.use('/users', usersRouter);


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

module.exports = app;
