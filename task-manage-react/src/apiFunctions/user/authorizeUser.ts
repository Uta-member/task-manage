import { UserId } from "@/class/user";
import {
  AuthorizeUserReq,
  AuthorizeUserRes,
  authorizeUserHttpChannel,
} from "./scheme/authorizeUser";
import { server } from "@/common/api";

export const authorizeUser = async (req: {
  userId: UserId;
  verificationCode: string;
}) => {
  const { userId, verificationCode } = req;
  const reqData: AuthorizeUserReq = {
    userId: userId.value,
    verificationCode,
  };

  const result = await server.post<AuthorizeUserRes>(
    authorizeUserHttpChannel,
    reqData
  );

  return result;
};
