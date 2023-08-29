import { OriginGroupIdType } from "./group";

export type OriginRoleIdType = number;
export type OriginRoleNameType = string;
export type OriginRoleGroupIdType = OriginGroupIdType;

export type OriginRoleType = {
  id: OriginRoleIdType;
  role: OriginRoleNameType;
  group_id: OriginRoleGroupIdType;
};

export type OriginMasterRoleIdType = OriginRoleIdType;
export type OriginMasterRoleNameType = OriginRoleNameType;

export type OriginMasterRoleType = {
  id: OriginMasterRoleIdType;
  role: OriginMasterRoleNameType;
};
