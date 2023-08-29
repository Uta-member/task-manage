import { server } from "@/common/api";
import {
  CreateUserHttpReq,
  CreateUserHttpRes,
  createUserHttpChannel,
} from "./scheme/createUser";
import { User, UserPassword } from "@/class/user";

/**
 * ユーザ登録を行う関数
 * @param req
 * @returns
 */
export const createUser = async (req: {
  user: User;
  password: UserPassword;
}) => {
  const reqData: CreateUserHttpReq = {
    user: {
      id: req.user.id.value,
      name: req.user.name.value,
      email: req.user.email.value,
    },
    password: req.password.value,
  };

  const result = await server.post<CreateUserHttpRes>(
    createUserHttpChannel,
    reqData
  );
  return result;
};
