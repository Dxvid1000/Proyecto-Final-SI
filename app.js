var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://DavidV:HeZAL0seEaaSKa7H@gruposmusicales-mdtfk.mongodb.net/GM?retryWrites=true&w=majority', {
//mongodb+srv://DavidV:<password>@gruposmusicales-mdtfk.mongodb.net/<dbname>?retryWrites=true&w=majority

    useNewUrlParser: true
  }).then(() => {
    console.log('Conectado a la base de Datos sobre Grupos Musicales')
  })
  .catch(err => console.log(err));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.render('error');
});

module.exports = app;
