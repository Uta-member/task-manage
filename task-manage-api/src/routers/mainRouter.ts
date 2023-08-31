import { Router } from "express";
import { userRouter } from "./user/userRouter";
import { groupRouter } from "./group/groupRouter";

const mainRouter = Router();

userRouter(mainRouter);
groupRouter(mainRouter);

export default mainRouter;
