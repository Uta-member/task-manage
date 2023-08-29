import { DBTimeStampType } from "./commonType";
import { OriginRoleIdType } from "./role";
import { OriginUserIdType } from "./user";

export type OriginGroupIdType = number;
export type OriginGroupNameType = string;
export type OriginGroupCreatedDatetimeType = DBTimeStampType;
export type OriginGroupDeletedDatetimeType = DBTimeStampType | null;

export type OriginGroupType = {
  id: OriginGroupIdType;
  name: OriginGroupNameType;
  created_datetime: OriginGroupCreatedDatetimeType;
  deleted_datetime: OriginGroupDeletedDatetimeType;
};

export type OriginGroupMemberGroupIdType = OriginGroupIdType;
export type OriginGroupMemberUserIdType = OriginUserIdType;
export type OriginGroupMemberSecType = number;
export type OriginGroupMemberRoleIdType = OriginRoleIdType | null;
export type OriginGroupMemberStartDatetimeType = DBTimeStampType;
export type OriginGroupMemberEndDatetimeType = DBTimeStampType;

export type OriginGroupMember = {
  group_id: OriginGroupMemberGroupIdType;
  user_id: OriginGroupMemberUserIdType;
  sec: OriginGroupMemberSecType;
  role_id: OriginGroupMemberRoleIdType;
  start_datetime: OriginGroupMemberStartDatetimeType;
  end_datetime: OriginGroupMemberEndDatetimeType;
};
