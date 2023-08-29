import { UserIdType } from "@/class/user";
import { ResponseBase } from "@/types/responseBase";

export const authorizeUserHttpChannel = "/user/authorize";

export type AuthorizeUserReq = {
  userId: UserIdType;
  verificationCode: string;
};

export type AuthorizeUserRes = ResponseBase;
