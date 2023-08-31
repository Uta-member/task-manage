import { GroupId } from "@/class/group";
import { UserId } from "@/class/user";
import { DBParamsType } from "@/types/dbTypes/commonType";
import {
  OriginGroupMemberRoleIdType,
  OriginGroupMemberSecType,
} from "@/types/dbTypes/group";

export const getCreateGroupMemberQuery = (params: {
  groupId: GroupId;
  userId: UserId;
  sec: OriginGroupMemberSecType;
  roleId?: OriginGroupMemberRoleIdType;
}) => {
  const { groupId, userId, sec, roleId } = params;

  let query = `
  INSERT INTO
    group_member
    (group_id, user_id, sec`;

  const DBParams: DBParamsType = [];

  DBParams.push(groupId.value);
  DBParams.push(userId.value);
  DBParams.push(sec);

  if (roleId != undefined) {
    query += `, roleId`;
    DBParams.push(roleId);
  }

  query += `)`;
  query += `
  VALUES
  ($1, $2, $3`;

  if (roleId != undefined) {
    query += `, $4`;
  }

  query += `)`;

  return { query, DBParams };
};
