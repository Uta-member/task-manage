import winston from "winston";

const format = winston.format;
const logFolderPath = `./log/`;

const generateLogFileName = () => {
  const date = new Date();
  return `${logFolderPath}${date.getFullYear()}${date.getMonth()}${date.getDay()}.log`;
};

export const logger = winston.createLogger({
  level: "info",
  format: format.combine(
    format.timestamp(), // timestampを出力する
    format.splat(), // String interpolation splat for %d %s-style messages.
    format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      dirname: logFolderPath,
      filename: generateLogFileName(),
      maxsize: 10 * 1024 * 1024,
      maxFiles: 10,
      tailable: true,
    }),
  ],
});
