var indexRouter = require('./indexRouter');

module.exports = function(app){
    app.use('/',indexRouter);
};