import { execQuery } from "@/common/database/transaction";
import {
  OriginCreateGroup,
  getCreateGroupQuery,
} from "./queryBuilder/getCreateGroupQuery";
import { GroupId, GroupName } from "@/class/group";
import { UserId } from "@/class/user";
import { getCreateGroupMemberQuery } from "./queryBuilder/getCreateGroupMemberQuery";

export const createGroup = async (params: {
  groupName: GroupName;
  userId: UserId;
}) => {
  const { groupName, userId } = params;

  const result = await execQuery<OriginCreateGroup>(
    getCreateGroupQuery({ groupName })
  );

  if (result.rowCount < 1) {
    throw new Error("グループの作成に失敗しました");
  }

  await execQuery(
    getCreateGroupMemberQuery({
      groupId: new GroupId(result.rows[0].id),
      userId,
      sec: 1,
    })
  );
};
