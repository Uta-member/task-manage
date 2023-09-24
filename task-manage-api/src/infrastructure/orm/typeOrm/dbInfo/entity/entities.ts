import { AppGroupEntity } from "./appGroup";
import { AppUserEntity } from "./appUser";
import { BoardEntity } from "./board";
import { BoardTaskEntity } from "./boardTask";
import { DeadlineEntity } from "./deadline";
import { GroupMemberEntity } from "./groupMember";
import { MasterRoleEntity } from "./masterRole";
import { ProjectEntity } from "./project";
import { ProjectMemberEntity } from "./projectMember";
import { ResponsiblePersonEntity } from "./responsiblePerson";
import { RoleEntity } from "./role";
import { SubTaskEntity } from "./subTask";
import { TaskEntity } from "./task";
import { TaskCompletedStatusEntity } from "./taskCompletedStatus";

export const dbEntityList = [
  AppGroupEntity,
  AppUserEntity,
  BoardEntity,
  BoardTaskEntity,
  DeadlineEntity,
  GroupMemberEntity,
  MasterRoleEntity,
  ProjectEntity,
  ProjectMemberEntity,
  ResponsiblePersonEntity,
  RoleEntity,
  SubTaskEntity,
  TaskEntity,
  TaskCompletedStatusEntity,
];

export {
  AppGroupEntity,
  AppUserEntity,
  BoardEntity,
  BoardTaskEntity,
  DeadlineEntity,
  GroupMemberEntity,
  MasterRoleEntity,
  ProjectEntity,
  ProjectMemberEntity,
  ResponsiblePersonEntity,
  RoleEntity,
  SubTaskEntity,
  TaskEntity,
  TaskCompletedStatusEntity,
};
