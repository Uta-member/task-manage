import { Router } from "express";
import { readGroupListHttpChannel } from "./scheme/readGroupList";
import { readGroupListHandler } from "@/routeFunctions/group/readGroupListHandler";
import { createGroupHttpChannel } from "./scheme/createGroup";
import { createGroupHandler } from "@/routeFunctions/group/createGroupHandler";

export const groupRouter = (router: Router) => {
  router.post(readGroupListHttpChannel, readGroupListHandler);
  router.post(createGroupHttpChannel, createGroupHandler);
};
