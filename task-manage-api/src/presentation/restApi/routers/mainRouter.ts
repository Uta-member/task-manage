import { Router } from "express";
import { userRouter } from "./userRouter";

const router = Router();

userRouter(router);

export default router;
