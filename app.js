var express = require("express");
var path = require("path");
var app = express();
var ejsLoyout = require('express-ejs-layouts');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.use(ejsLoyout);
app.use('/public',express.static(path.join(__dirname,'public')));

require('./routers/routerManager')(app);

app.listen(8000);