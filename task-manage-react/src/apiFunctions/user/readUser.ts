import { Email, User, UserId, UserName } from "@/class/user";
import {
  ReadUserReq,
  ReadUserRes,
  readUserHttpChannel,
} from "./scheme/readUser";
import { server } from "@/common/api";
import { ResponseBase } from "@/types/responseBase";

/**
 * ユーザの情報を取得する関数
 * @param userId
 * @returns
 */
export const readUser = async (
  userId: UserId
): Promise<ResponseBase & { user?: User }> => {
  const reqData: ReadUserReq = {
    userId: userId.value,
  };

  const result = await server.post<ReadUserRes>(readUserHttpChannel, reqData);

  const resData = result.data;
  if (!resData.isSuccess || resData.userInfo === undefined) {
    return resData;
  }

  return {
    isSuccess: true,
    user: new User({
      id: new UserId(resData.userInfo.id),
      name: new UserName(resData.userInfo.name),
      email: new Email(resData.userInfo.email),
    }),
  };
};
