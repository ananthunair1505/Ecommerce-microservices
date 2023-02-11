var logger = require('morgan');

class LoggerLoader {
    static load(app) {
        app.use(logger('dev'));
    }
}

module.exports = LoggerLoader;