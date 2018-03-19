const express = require('express');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const submitDataHandler = require('./handler.js').submitDataHandler;
const app  = express();

const redirectToLogin= function (req,res) {
  res.redirect('./index.html');
}

app.use(express.urlencoded({extended:false}));

app.use(cookieParser());

app.use(express.json());

app.get('/login',redirectToLogin);

app.post('/login',submitDataHandler);

app.use(express.static('public'));

exports.app = app;
