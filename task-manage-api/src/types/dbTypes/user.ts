import { DBTimeStampType } from "./commonType";

export type OriginUserIdType = string;
export type OriginUserNameType = string;
export type OriginEmailType = string;
export type OriginUserCreatedDatetimeType = DBTimeStampType;
export type OriginUserDeletedDatetimeType = DBTimeStampType | null;

export type OriginUserType = {
  id: OriginUserIdType;
  name: OriginUserNameType;
  email: OriginEmailType;
  created_datetime: OriginUserCreatedDatetimeType;
  deleted_datetime: OriginUserDeletedDatetimeType;
};
