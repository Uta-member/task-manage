import { UserId } from "@/class/user";
import {
  ReadGroupListHttpReq,
  ReadGroupListHttpRes,
  readGroupListHttpChannel,
} from "./scheme/readGroupList";
import { server } from "@/common/api";
import { GroupId, GroupName } from "@/class/group";

/**
 * 所属グループ一覧を取得する関数
 * @param req
 * @returns
 */
export const readGroupList = async (req: {
  userId: UserId;
}): Promise<{
  isSuccess: boolean;
  err?: { errMessage: string };
  groupList?: { id: GroupId; name: GroupName }[];
}> => {
  const { userId } = req;
  const reqData: ReadGroupListHttpReq = {
    userId: userId.value,
  };

  const result = await server.post<ReadGroupListHttpRes>(
    readGroupListHttpChannel,
    reqData
  );
  const resData = result.data;

  if (!resData.isSuccess || resData.groupList === undefined) {
    return { isSuccess: false, err: resData.err };
  }

  return {
    ...resData,
    groupList: resData.groupList.map((group) => {
      return {
        id: new GroupId(group.id),
        name: new GroupName(group.name),
      };
    }),
  };
};
