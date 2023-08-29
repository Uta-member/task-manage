import { Email, User, UserId, UserName, UserPassword } from "@/class/user";
import { UserErrorEnum, getUserErrCode } from "@/common/logBuilder/errCode";
import { writeLog } from "@/common/logBuilder/logBuilder";
import { createUser } from "@/functions/user/createUser";
import {
  CreateUserHttpReq,
  CreateUserHttpRes,
} from "@/routers/user/scheme/createUser";
import { Request, Response } from "express";

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const reqBody: CreateUserHttpReq = req.body;
    const { user, password } = reqBody;

    writeLog({
      logKind: "INFO",
      logTitle: "ユーザの登録がリクエストされました",
      logDetail: `ユーザID: ${reqBody.user.id}`,
    });

    let userInstance: User = null!;
    let passwordInstance: UserPassword = null!;

    // ユーザのインスタンス化
    try {
      userInstance = new User({
        id: new UserId(user.id),
        name: new UserName(user.name),
        email: new Email(user.email),
      });
    } catch (err) {
      writeLog({
        logKind: "ERROR",
        logTitle: "Userのインスタンスの生成に失敗しました",
        errLogParams: {
          errCode: getUserErrCode(UserErrorEnum.userInstanceCreateFailed),
          err: err,
        },
      });

      throw new Error("リクエストが不正です");
    }

    // パスワードのインスタンス化
    try {
      passwordInstance = new UserPassword(password);
    } catch (err) {
      writeLog({
        logKind: "ERROR",
        logTitle: "UserPasswordのインスタンスの生成に失敗しました",
        errLogParams: {
          errCode: getUserErrCode(
            UserErrorEnum.userPasswordInstanceCreateFailed
          ),
          err: err,
        },
      });

      throw new Error("リクエストが不正です");
    }

    // CognitoとDBへの登録トランザクション
    try {
      await createUser({ user: userInstance, password: passwordInstance });
    } catch (err) {
      let message = "登録に失敗しました";
      let errEnum: UserErrorEnum = UserErrorEnum.cognitoUserRegisterFailed;
      // Cognitoからのエラー内容の解析
      if (err instanceof Error) {
        if (err.name === "UsernameExistsException") {
          message = "すでに登録されているユーザIDです";
          errEnum = UserErrorEnum.cognitoUsernameAlreadyExists;
        } else if (err.name === "InvalidPasswordException") {
          if (
            err.message ===
            "Password did not conform with policy: Password not long enough"
          ) {
            message = "パスワードは8文字以上で入力してください";
            errEnum = UserErrorEnum.cognitoPasswordNotLongEnough;
          }
          if (
            err.message ===
            "Password did not conform with policy: Password must have symbol characters"
          ) {
            message =
              "パスワードには半角の英小文字、英大文字、数字をそれぞれ1文字以上含めてください";
            errEnum = UserErrorEnum.cognitoPasswordMustHaveSymbolCharacters;
          } else {
            message = "パスワードが不正です";
            errEnum = UserErrorEnum.cognitoPasswordDidNotConformWithPolicy;
          }
        }
      }

      writeLog({
        logKind: "ERROR",
        logTitle: "ユーザ登録に失敗しました",
        errLogParams: {
          errCode: getUserErrCode(errEnum),
          err: err,
        },
      });

      throw new Error(message);
    }

    writeLog({
      logKind: "INFO",
      logTitle: "ユーザ登録が完了しました",
      logDetail: `ユーザID: ${reqBody.user.id}`,
    });

    const resData: CreateUserHttpRes = {
      isSuccess: true,
    };

    res.status(200).send(resData);
  } catch (err) {
    let message = "ユーザの登録に失敗しました";
    writeLog({
      logKind: "ERROR",
      logTitle: message,
    });

    if (err instanceof Error) {
      message = err.message;
    }

    const resData: CreateUserHttpRes = {
      isSuccess: false,
      err: {
        errMessage: message,
      },
    };

    res.status(500).send(resData);
  }
};
