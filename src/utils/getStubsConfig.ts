import { join } from "path";
import { existsSync } from "fs";

const cwd = process.cwd();
// const ext = existsSync(join(cwd, "tsconfig.json")) ? ".ts" : ".js";

/**
 * Get the stubs config
 *
 * @returns { Object } The stubs config
 */
const getStubsConfig = async () => {
    console.log("getStubsConfig");

    const config = "stubs.config";

    // Check if project has typescript, if so, use .ts, else use .js
    const ext = existsSync(join(cwd, "tsconfig.json")) ? ".ts" : ".js";
    const configFile = join(cwd, `${config}`);

    if (existsSync(configFile)) {
        const config = await import(configFile);
        console.log(config);

        return config.default;
    }
};

export { getStubsConfig };
