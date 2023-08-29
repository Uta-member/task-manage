import { User } from "@/class/user";
import { DBParamsType } from "@/types/dbTypes/commonType";

export const getCreateUserQuery = (params: { user: User }) => {
  const { user } = params;

  const query = `
  INSERT INTO
    app_user
    (id, name, email)
  VALUES
    ($1, $2, $3)
  `;

  const DBParams: DBParamsType = [];
  DBParams.push(user.id.value);
  DBParams.push(user.name.value);
  DBParams.push(user.email.value);

  return { query, DBParams };
};
