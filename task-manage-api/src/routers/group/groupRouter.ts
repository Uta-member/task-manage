import { Router } from "express";
import { readGroupListHttpChannel } from "./scheme/readGroupList";
import { readGroupListHandler } from "@/routeFunctions/group/readGroupListHandler";

export const groupRouter = (router: Router) => {
  router.post(readGroupListHttpChannel, readGroupListHandler);
};
