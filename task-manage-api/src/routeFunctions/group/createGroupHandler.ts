import { GroupName } from "@/class/group";
import { UserId } from "@/class/user";
import { GroupErrorEnum, getGroupErrCode } from "@/common/logBuilder/errCode";
import { writeLog } from "@/common/logBuilder/logBuilder";
import { createGroup } from "@/functions/group/createGroup";
import {
  CreateGroupHttpReq,
  CreateGroupHttpRes,
} from "@/routers/group/scheme/createGroup";
import { Request, Response } from "express";

export const createGroupHandler = async (req: Request, res: Response) => {
  try {
    const reqBody: CreateGroupHttpReq = req.body;

    await createGroup({
      groupName: new GroupName(reqBody.groupName),
      userId: new UserId(reqBody.userId),
    });

    const resData: CreateGroupHttpRes = {
      isSuccess: true,
    };

    writeLog({
      logKind: "INFO",
      logTitle: "グループを作成しました",
      logDetail: `グループ名: ${reqBody.groupName}`,
    });

    res.status(200).send(resData);
  } catch (err) {
    writeLog({
      logKind: "ERROR",
      logTitle: "グループ作成に失敗しました",
      errLogParams: {
        errCode: getGroupErrCode(GroupErrorEnum.createGroupFailed),
        err: err,
      },
    });

    const resData: CreateGroupHttpRes = {
      isSuccess: false,
      err: {
        errMessage: "グループ作成に失敗しました",
      },
    };
    res.status(500).send(resData);
  }
};
