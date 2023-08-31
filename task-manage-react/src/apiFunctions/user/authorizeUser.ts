import { UserId } from "@/class/user";
import {
  AuthorizeUserHttpReq,
  AuthorizeUserHttpRes,
  authorizeUserHttpChannel,
} from "./scheme/authorizeUser";
import { server } from "@/common/api";

export const authorizeUser = async (req: {
  userId: UserId;
  verificationCode: string;
}) => {
  const { userId, verificationCode } = req;
  const reqData: AuthorizeUserHttpReq = {
    userId: userId.value,
    verificationCode,
  };

  const result = await server.post<AuthorizeUserHttpRes>(
    authorizeUserHttpChannel,
    reqData
  );

  return result;
};
