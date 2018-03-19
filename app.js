const express = require('express');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const submitDataHandler = require('./handler.js').submitDataHandler;
const app  = express();

const redirectToLogin= function (req,res) {
  // res.send(fs.readFileSync('/public/login.html'));
  res.redirect('./index.html');
}
// const getBody = function (req,res) {
//   console.log(req.body);
//   console.log(req.body,'fhjmgh');
// }

app.use(express.urlencoded({extended:false}));

app.use(cookieParser());

app.use(express.json());

app.get('/login',redirectToLogin);

app.post('/login',submitDataHandler);

app.use(express.static('public'));

exports.app = app;
