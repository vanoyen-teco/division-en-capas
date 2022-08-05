const logger = require("../config/logger");

function middlewareLogging(req, res, next){
    logger.loggerConsole.info(`${req.originalUrl} ${req.method}`);
    next();
}

module.exports = middlewareLogging;