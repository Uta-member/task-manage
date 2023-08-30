import { UserId } from "@/class/user";
import { DBParamsType } from "@/types/dbTypes/commonType";

export const getReadUserQuery = (userId: UserId) => {
  const query = `
  SELECT
    id,
    name,
    email,
    created_datetime,
    deleted_datetime
  FROM
    app_user
  WHERE
    id = $1
  `;

  const DBParams: DBParamsType = [];
  DBParams.push(userId.value);

  return { query, DBParams };
};
