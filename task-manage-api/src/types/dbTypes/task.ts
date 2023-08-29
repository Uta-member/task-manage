import { DBTimeStampType } from "./commonType";
import { OriginUserIdType } from "./user";

export type OriginTaskIdType = string;
export type OriginTaskTitleType = string;
export type OriginTaskCreatedDatetimeType = DBTimeStampType;
export type OriginTaskDeletedDatetimeType = DBTimeStampType | null;

export type OriginTaskType = {
  id: OriginTaskIdType;
  title: OriginTaskTitleType;
  created_datetime: OriginTaskCreatedDatetimeType;
  deleted_datetime: OriginTaskDeletedDatetimeType;
};

export type OriginSubTaskParentTaskIdType = OriginTaskIdType;
export type OriginSubTaskChildTaskIdType = OriginTaskIdType;

export type OriginSubTaskType = {
  parent_task_id: OriginSubTaskParentTaskIdType;
  child_task_id: OriginSubTaskChildTaskIdType;
};

export type OriginResponsiblePersonUserIdType = OriginUserIdType;
export type OriginResponsiblePersonTaskIdType = OriginTaskIdType;
export type OriginResponsiblePersonStartDatetimeType = DBTimeStampType;
export type OriginResponsiblePersonEndDatetimeType = DBTimeStampType | null;

export type OriginResponsiblePersonType = {
  user_id: OriginResponsiblePersonUserIdType;
  task_id: OriginResponsiblePersonTaskIdType;
  start_datetime: OriginResponsiblePersonStartDatetimeType;
  end_datetime: OriginResponsiblePersonEndDatetimeType;
};

export type OriginDeadLineTaskIdType = OriginTaskIdType;
export type OriginDeadLineSecType = number;
export type OriginDeadLineStartDatetimeType = DBTimeStampType | null;
export type OriginDeadLineEndDatetimeType = DBTimeStampType;
export type OriginDeadLineUserIdType = OriginUserIdType;
export type OriginDeadLineCreatedDatetimeType = DBTimeStampType;
export type OriginDeadLineDeletedDatetimeType = DBTimeStampType | null;

export type OriginDeadLineType = {
  task_id: OriginDeadLineTaskIdType;
  sec: OriginDeadLineSecType;
  start_datetime: OriginDeadLineStartDatetimeType;
  end_datetime: OriginDeadLineEndDatetimeType;
  user_id: OriginDeadLineUserIdType;
  created_datetime: OriginDeadLineCreatedDatetimeType;
  deleted_datetime: OriginDeadLineDeletedDatetimeType;
};

export type OriginTaskCompletedStatusTaskIdType = OriginTaskIdType;
export type OriginTaskCompletedStatusSecType = number;
export type OriginTaskCompletedStatusCompletedType = boolean;
export type OriginTaskCompletedStatusUserIdType = OriginUserIdType;
export type OriginTaskCompletedStatusCreatedDatetimeType = string;

export type OriginTaskCompletedStatusType = {
  task_id: OriginTaskCompletedStatusTaskIdType;
  sec: OriginTaskCompletedStatusSecType;
  completed: OriginTaskCompletedStatusCompletedType;
  user_id: OriginTaskCompletedStatusUserIdType;
  created_datetime: OriginTaskCompletedStatusCreatedDatetimeType;
};
