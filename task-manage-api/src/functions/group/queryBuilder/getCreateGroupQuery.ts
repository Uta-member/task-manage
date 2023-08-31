import { GroupName } from "@/class/group";
import { DBParamsType } from "@/types/dbTypes/commonType";
import { OriginGroupIdType } from "@/types/dbTypes/group";

export type OriginCreateGroup = {
  id: OriginGroupIdType;
};

export const getCreateGroupQuery = (params: { groupName: GroupName }) => {
  const query = `
  INSERT INTO
    app_group
    (name)
  VALUES
    ($1)
  RETURNING id
  `;

  const DBParams: DBParamsType = [];
  DBParams.push(params.groupName.value);

  return { query, DBParams };
};
