import { appendFileSync, existsSync, mkdirSync } from "fs";
import { logPath, infoLogPath, errorLogPath } from "../resourcePath";
import { format } from "date-fns";

export type GeneralLogKind = "INFO" | "CAUNTION" | "ERROR";

export type GeneralLogParams = {
  logKind: GeneralLogKind;
  logTitle: string;
  logDetail?: string;
  errLogParams?: {
    errCode: string;
    err: unknown;
  };
};

export const writeGeneralLog = (params: GeneralLogParams) => {
  const { logKind, logTitle, logDetail, errLogParams } = params;

  try {
    if (!existsSync(logPath)) {
      mkdirSync(logPath);
    }

    if (!existsSync(infoLogPath)) {
      mkdirSync(infoLogPath);
    }

    const logFileName = `${format(new Date(), "yyyyMMdd")}.log`;

    let logDetailMessage = "";
    if (logDetail !== undefined) {
      logDetailMessage = logDetail;
    }

    let logErrorMessage = "";
    if (errLogParams !== undefined) {
      let errMessage = "";
      if (errLogParams.err instanceof Error) {
        errMessage = `${errLogParams.err.name}\n${errLogParams.err.message}`;
      } else if (typeof errLogParams.err === "string") {
        errMessage = errLogParams.err;
      }
      logErrorMessage = `エラー情報\nErrCode:[${errLogParams.errCode}]\n${errMessage}`;
    }

    const logMessage = `${format(
      new Date(),
      "yyyy-MM-dd hh:mm:ss"
    )} [${logKind}] ${logTitle}${
      logDetailMessage.length > 0 ? `\n${logDetailMessage}` : ""
    }${logErrorMessage.length > 0 ? `\n${logErrorMessage}` : ""}\n`;

    appendFileSync(`${infoLogPath}${logFileName}`, logMessage);
    if (logKind === "ERROR") {
      if (!existsSync(errorLogPath)) {
        mkdirSync(errorLogPath);
      }
      appendFileSync(`${errorLogPath}${logFileName}`, logMessage);
    }
  } catch (err) {}
};
