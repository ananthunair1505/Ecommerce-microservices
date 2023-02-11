let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');

const productsApiRouter = require('../routes/products-api');
const swaggerRouter = require('../routes/swagger');

class ExpressLoader {
    static load(app) {
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(cookieParser());
        app.use(express.static(path.join(__dirname, 'public')));

        app.use('/api/products', productsApiRouter);
        app.use('/api-docs', swaggerRouter);

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
    }
}

module.exports = ExpressLoader;