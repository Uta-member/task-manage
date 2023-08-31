import { UserId } from "@/class/user";
import {
  GroupErrorEnum,
  UserErrorEnum,
  getGroupErrCode,
  getUserErrCode,
} from "@/common/logBuilder/errCode";
import { writeLog } from "@/common/logBuilder/logBuilder";
import { ReadGroupList, readGroupList } from "@/functions/group/readGroupList";
import {
  ReadGroupListHttpReq,
  ReadGroupListHttpRes,
} from "@/routers/group/scheme/readGroupList";
import { Request, Response } from "express";

export const readGroupListHandler = async (req: Request, res: Response) => {
  try {
    const reqBody: ReadGroupListHttpReq = req.body;

    let userId: UserId | null = null;

    try {
      userId = new UserId(reqBody.userId);
    } catch (err) {
      writeLog({
        logKind: "ERROR",
        logTitle: "ユーザIDのインスタンス化に失敗しました",
        logDetail: `ユーザID: ${reqBody.userId}`,
        errLogParams: {
          errCode: getUserErrCode(UserErrorEnum.userIdInstanceCreateFailed),
          err: err,
        },
      });
      throw new Error("不正なリクエストです");
    }

    let groupList: ReadGroupList[] = [];
    try {
      groupList = await readGroupList(userId);
    } catch (err) {
      writeLog({
        logKind: "ERROR",
        logTitle: "グループ一覧の取得処理に失敗しました",
        errLogParams: {
          errCode: getGroupErrCode(GroupErrorEnum.readGroupListFailed),
          err: err,
        },
      });
      throw new Error("グループ一覧の取得に失敗しました");
    }

    const resData: ReadGroupListHttpRes = {
      isSuccess: true,
      groupList: groupList.map((group) => {
        return {
          id: group.id.value,
          name: group.name.value,
        };
      }),
    };
    res.status(200).send(resData);
  } catch (err) {
    let message = "グループ一覧の取得に失敗しました";
    writeLog({
      logKind: "ERROR",
      logTitle: message,
    });

    if (err instanceof Error) {
      message = err.message;
    }

    const resData: ReadGroupListHttpRes = {
      isSuccess: false,
      err: {
        errMessage: message,
      },
    };

    res.status(500).send(resData);
  }
};
