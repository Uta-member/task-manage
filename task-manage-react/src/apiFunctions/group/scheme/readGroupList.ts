import { GroupIdType, GroupNameType } from "@/class/group";
import { UserIdType } from "@/class/user";
import { ResponseBase } from "@/types/responseBase";

export const readGroupListHttpChannel = "/group/readList";

export type ReadGroupListHttpReq = {
  userId: UserIdType;
};

export type ReadGroupListHttpRes = ResponseBase & {
  groupList?: { id: GroupIdType; name: GroupNameType }[];
};
