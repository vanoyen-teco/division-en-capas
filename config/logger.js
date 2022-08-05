const log4js = require("log4js");

log4js.configure({
    appenders: {
        loggerConsole: { type: "console" },
        warnFile: { type: 'file', filename: './logs/warn.log' },
        errorFile: { type: 'file', filename: './logs/error.log' }
    },
    categories: {
        default: { appenders: ["loggerConsole"], level: "all" },
        console: { appenders: ["loggerConsole"], level: "all" },
        warnings: { appenders: ["loggerConsole", "warnFile"], level: "warn" },
        errors: { appenders: ["loggerConsole", "errorFile"], level: "error" }
    }
})

const logger = log4js.getLogger('Loggers App');
logger.level = "ALL";

const loggerConsole = log4js.getLogger('console');
const loggerWarn = log4js.getLogger('warnings');
const loggerError = log4js.getLogger('errors');

module.exports = {
    loggerConsole,
    loggerWarn,
    loggerError
}