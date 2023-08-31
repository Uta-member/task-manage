import { User, UserId } from "@/class/user";
import { UserErrorEnum, getUserErrCode } from "@/common/logBuilder/errCode";
import { writeLog } from "@/common/logBuilder/logBuilder";
import { readUser } from "@/functions/user/readUser";
import {
  ReadUserHttpReq,
  ReadUserHttpRes,
} from "@/routers/user/scheme/readUser";
import { Request, Response } from "express";

export const readUserHandler = async (req: Request, res: Response) => {
  try {
    const reqBody: ReadUserHttpReq = req.body;

    let userId: UserId = null!;
    try {
      userId = new UserId(reqBody.userId);
    } catch (err) {
      writeLog({
        logKind: "ERROR",
        logTitle: "ユーザIDのインスタンス化に失敗しました",
        logDetail: `userId: ${reqBody.userId}`,
        errLogParams: {
          errCode: getUserErrCode(UserErrorEnum.userIdInstanceCreateFailed),
          err: err,
        },
      });
      throw new Error("リクエストが不正です");
    }

    let user: User = null!;
    try {
      user = await readUser(userId);
    } catch (err) {
      writeLog({
        logKind: "ERROR",
        logTitle: "ユーザ情報の取得に失敗しました",
        logDetail: `userId: ${userId.value}`,
        errLogParams: {
          errCode: getUserErrCode(UserErrorEnum.readUserInfoFailed),
          err: err,
        },
      });
      throw new Error("ユーザ情報の取得に失敗しました");
    }

    if (user === null) {
      writeLog({
        logKind: "ERROR",
        logTitle: "ユーザ情報の取得に失敗しました",
        logDetail: `userId: ${userId.value}`,
        errLogParams: {
          errCode: getUserErrCode(UserErrorEnum.readUserInfoFailed),
          err: "ユーザデータがnullでした",
        },
      });
      throw new Error("ユーザ情報の取得に失敗しました");
    }

    const resData: ReadUserHttpRes = {
      isSuccess: true,
      userInfo: {
        id: user.id.value,
        name: user.name.value,
        email: user.email.value,
      },
    };

    res.status(200).send(resData);
  } catch (err) {
    let message = "ユーザ情報の取得に失敗しました";
    writeLog({
      logKind: "ERROR",
      logTitle: message,
    });

    if (err instanceof Error) {
      message = err.message;
    }

    const resData: ReadUserHttpRes = {
      isSuccess: false,
      err: {
        errMessage: message,
      },
    };

    res.status(500).send(resData);
  }
};
