import { Router } from "express";
import { userRouter } from "./user/userRouter";

const mainRouter = Router();

userRouter(mainRouter);

export default mainRouter;
