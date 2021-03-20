import { Hook } from "@oclif/config";
import fs from "fs";

declare global {
  namespace NodeJS {
    interface Global {
      linearApiKey: string;
    }
  }
}

const hook: Hook<"prerun"> = async function (opt) {
  const configFilePath = `${opt.config.configDir}/config.json`;

  try {
    const config = fs.readFileSync(configFilePath, {
      encoding: "utf8",
    });
    const { apiKey } = JSON.parse(config);

    global.linearApiKey = apiKey;
  } catch (error) {
    console.error(error);
  }
};

export default hook;
