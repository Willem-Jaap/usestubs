import chalk from "chalk";

type LogType = "info" | "success" | "warn" | "error";

/**
 * Log a message to the console
 *
 * @param { string } message The message to log
 * @param { LogType } type The type of log
 */
const log = (message: string, type?: LogType) => {
    let logMessage = message;

    switch (type) {
        case "info":
            logMessage = chalk.blue(message);
            break;
        case "success":
            logMessage = chalk.green(message);
            break;
        case "warn":
            logMessage = chalk.yellow(message);
            break;
        case "error":
            logMessage = chalk.red(message);
            break;

        default:
            break;
    }

    console.log(chalk`{cyan [usestubs]} ${logMessage}`);
};

/**
 * Log an info message to the console
 *
 * @param message The message to log
 */
log.info = (message: string) => {
    log(message, "info");
};

/**
 * Log a success message to the console
 *
 * @param { string } message The message to log
 */
log.success = (message: string) => {
    log(message, "success");
};

/**
 * Log a warning message to the console
 *
 * @param message The message to log
 */
log.warn = (message: string) => {
    log(message, "warn");
};

/**
 * Log an error message to the console
 *
 * @param message The message to log
 */
log.error = (message: string) => {
    log(message, "error");
};

export { log };
