import { Email, User, UserId, UserName } from "@/class/user";
import { execQuery } from "@/common/database/transaction";
import { OriginUserType } from "@/types/dbTypes/user";
import { getReadUserQuery } from "./queryBuilder/getReadUserQuery";

export const readUser = async (userId: UserId) => {
  const result = await execQuery<OriginUserType>(getReadUserQuery(userId));
  const originUser = result.rows[0];
  const user = new User({
    id: new UserId(originUser.id),
    name: new UserName(originUser.name),
    email: new Email(originUser.email),
  });

  return user;
};
