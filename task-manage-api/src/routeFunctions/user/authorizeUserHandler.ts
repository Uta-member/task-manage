import { UserId } from "@/class/user";
import { getUserErrCode, UserErrorEnum } from "@/common/logBuilder/errCode";
import { writeLog } from "@/common/logBuilder/logBuilder";
import { authorizeUser } from "@/functions/user/authorizeUser";
import {
  AuthorizeUserHttpReq,
  AuthorizeUserRes,
} from "@/routers/user/scheme/authorizeUser";
import { Request, Response } from "express";

export const authorizeUserHandler = async (req: Request, res: Response) => {
  try {
    const reqBody: AuthorizeUserHttpReq = req.body;
    const { userId, verificationCode } = reqBody;

    writeLog({
      logKind: "INFO",
      logTitle: "ユーザの認証がリクエストされました",
      logDetail: `ユーザID: ${userId}`,
    });

    let userIdInstance: UserId = null!;
    try {
      userIdInstance = new UserId(userId);
    } catch (err) {
      writeLog({
        logKind: "ERROR",
        logTitle: "UserIdのインスタンスの生成に失敗しました",
        logDetail: `ユーザID: ${userId}`,
        errLogParams: {
          errCode: getUserErrCode(UserErrorEnum.userIdInstanceCreateFailed),
          err: err,
        },
      });

      throw new Error("リクエストが不正です");
    }

    try {
      await authorizeUser({ userId: userIdInstance, verificationCode });
    } catch (err) {
      writeLog({
        logKind: "ERROR",
        logTitle: "Cognitoのユーザ認証に失敗しました",
        logDetail: `ユーザID: ${userId}`,
        errLogParams: {
          errCode: getUserErrCode(UserErrorEnum.cognitoUserAuthorizeFailed),
          err: err,
        },
      });

      throw new Error("ユーザ認証に失敗しました");
    }

    writeLog({
      logKind: "INFO",
      logTitle: "Cognitoのユーザ認証に成功しました",
      logDetail: `ユーザID: ${userId}`,
    });

    const resData: AuthorizeUserRes = {
      isSuccess: true,
    };

    res.status(200).send(resData);
  } catch (err) {
    let message = "ユーザ認証に失敗しました";
    writeLog({
      logKind: "ERROR",
      logTitle: message,
    });

    if (err instanceof Error) {
      message = err.message;
    }

    const resData: AuthorizeUserRes = {
      isSuccess: false,
      err: {
        errMessage: message,
      },
    };

    res.status(500).send(resData);
  }
};
