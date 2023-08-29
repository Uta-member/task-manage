import { Router } from "express";
import { createUserHttpChannel } from "./scheme/createUser";
import { createUserHandler } from "@/routeFunctions/user/createUserHandler";
import { authorizeUserHttpChannel } from "./scheme/authorizeUser";
import { authorizeUserHandler } from "@/routeFunctions/user/authorizeUserHandler";

/**
 * ユーザ関連のルータ
 * @param router
 */
export const userRouter = (router: Router) => {
  router.post(createUserHttpChannel, createUserHandler);
  router.post(authorizeUserHttpChannel, authorizeUserHandler);
};
