import { UserId } from "@/class/user";
import { DBParamsType } from "@/types/dbTypes/commonType";
import { OriginGroupIdType, OriginGroupNameType } from "@/types/dbTypes/group";

export type OriginReadGroupList = {
  id: OriginGroupIdType;
  name: OriginGroupNameType;
};

export const getReadGroupListQuery = (params: { userId: UserId }) => {
  const { userId } = params;

  const query = `
  SELECT
    gr.id,
    gr.name
  FROM
    group_member gm
  INNER JOIN
    app_group gr
  ON
    gm.group_id = gr.id
  WHERE
    gm.user_id = $1
  AND
    NOW() >= gm.start_datetime
  AND
    (
      gm.end_datetime IS NULL OR gm.end_datetime > NOW()
    )
  `;

  const DBParams: DBParamsType = [];
  DBParams.push(userId.value);

  return { query, DBParams };
};
