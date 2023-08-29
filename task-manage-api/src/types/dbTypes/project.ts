import { DBTimeStampType } from "./commonType";
import { OriginGroupIdType } from "./group";
import { OriginUserIdType } from "./user";

export type OriginProjectIdType = number;
export type OriginProjectNameType = string;
export type OriginProjectGroupIdType = OriginGroupIdType;
export type OriginCreatedDatetimeType = DBTimeStampType;
export type OriginDeletedDatetimeType = DBTimeStampType | null;

export type OriginProjectType = {
  id: OriginProjectIdType;
  name: OriginProjectNameType;
  group_id: OriginProjectGroupIdType;
  created_datetime: OriginCreatedDatetimeType;
  deleted_datetime: OriginDeletedDatetimeType;
};

export type OriginProjectMemberProjectIdType = OriginProjectIdType;
export type OriginProjectMemberUserIdType = OriginUserIdType;
export type OriginProjectMemberSecType = number;
export type OriginProjectStartDatetimeType = DBTimeStampType;
export type OriginProjectEndDatetimeType = DBTimeStampType | null;

export type OriginProjectMemberType = {
  project_id: OriginProjectMemberProjectIdType;
  user_id: OriginProjectMemberUserIdType;
  sec: OriginProjectMemberSecType;
  start_datetime: OriginProjectStartDatetimeType;
  end_datetime: OriginProjectEndDatetimeType;
};
