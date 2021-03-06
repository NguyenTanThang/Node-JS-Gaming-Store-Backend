var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const mongoose = require("mongoose");
const config = require("./config/config");

var app = express();
app.use(cors());

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true
}, () => {
  console.log("we are connected")
}).catch(err => console.log(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Import Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use("/test-orders", require("./routes/test-orders"));
app.use("/orders", require("./routes/orders"));
app.use("/products", require("./routes/products"));
app.use("/genres", require("./routes/genres"));

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
  res.send(err);
});

module.exports = app;
