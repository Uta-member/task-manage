import { UserPasswordType, UserType } from "@/class/user";
import { ResponseBase } from "@/types/responseBase";

export const createUserHttpChannel = "/user/create";

export type CreateUserHttpReq = {
  user: UserType;
  password: UserPasswordType;
};

export type CreateUserHttpRes = ResponseBase;
