import { GroupNameType } from "@/class/group";
import { UserIdType } from "@/class/user";
import { ResponseBase } from "@/types/responseBase";

export const createGroupHttpChannel = "/group/create";

export type CreateGroupHttpReq = {
  groupName: GroupNameType;
  userId: UserIdType;
};

export type CreateGroupHttpRes = ResponseBase;
