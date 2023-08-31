import { UserIdType, UserType } from "@/class/user";
import { ResponseBase } from "@/types/responseBase";

export const readUserHttpChannel = "/user/read";

export type ReadUserHttpReq = {
  userId: UserIdType;
};

export type ReadUserHttpRes = ResponseBase & {
  userInfo?: UserType;
};
