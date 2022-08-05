const logger = require("../config/logger");

function middlewareErrorHandler(req, res, next){
    // Handler Route Error
    logger.loggerWarn.warn(`${req.originalUrl} ${req.method}`);
    res.status(404).send('No encontramos la ruta.');
}

module.exports = middlewareErrorHandler;