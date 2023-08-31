import { GroupName } from "@/class/group";
import {
  CreateGroupHttpReq,
  CreateGroupHttpRes,
  createGroupHttpChannel,
} from "./scheme/createGroup";
import { UserId } from "@/class/user";
import { server } from "@/common/api";

/**
 * グループを作成する関数
 * @param params
 * @returns
 */
export const createGroup = async (params: {
  groupName: GroupName;
  userId: UserId;
}) => {
  const { groupName, userId } = params;

  const reqData: CreateGroupHttpReq = {
    groupName: groupName.value,
    userId: userId.value,
  };

  const result = await server.post<CreateGroupHttpRes>(
    createGroupHttpChannel,
    reqData
  );
  return result;
};
