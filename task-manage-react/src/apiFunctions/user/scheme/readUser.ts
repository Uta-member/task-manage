import { UserIdType, UserType } from "@/class/user";
import { ResponseBase } from "@/types/responseBase";

export const readUserHttpChannel = "/user/read";

export type ReadUserReq = {
  userId: UserIdType;
};

export type ReadUserRes = ResponseBase & {
  userInfo?: UserType;
};
