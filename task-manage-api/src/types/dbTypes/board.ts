import { DBTimeStampType } from "./commonType";
import { OriginProjectIdType } from "./project";
import { OriginTaskIdType } from "./task";

export type OriginBoardIdType = string;
export type OriginBoardProjectIdType = OriginProjectIdType;
export type OriginBoardNameType = string;
export type OriginBoardOrderType = number;

export type OriginBoardType = {
  id: OriginBoardIdType;
  project_id: OriginBoardProjectIdType;
  name: OriginBoardNameType;
  order: OriginBoardOrderType;
};

export type OriginBoardTaskBoardIdType = OriginBoardIdType;
export type OriginBoardTaskTaskIdType = OriginTaskIdType;
export type OriginBoardTaskCreatedDatetimeType = DBTimeStampType;
export type OriginBoardTaskDeletedDatetimeType = DBTimeStampType | null;
export type OriginBoardTaskOrderType = number;

export type OriginBoardTaskType = {
  board_id: OriginBoardTaskBoardIdType;
  task_id: OriginBoardTaskTaskIdType;
  created_datetime: OriginBoardTaskCreatedDatetimeType;
  deleted_datetime: OriginBoardTaskDeletedDatetimeType;
  order: OriginBoardTaskOrderType;
};
