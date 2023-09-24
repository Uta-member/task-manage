import { Router } from "express";
import {
  fetchUserHttpChannel,
  handleFetchUser,
} from "../functions/user/handleFetchUser";

export const userRouter = (router: Router) => {
  router.post(fetchUserHttpChannel, handleFetchUser);
};
