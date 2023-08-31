import { UserId } from "@/class/user";
import {
  OriginReadGroupList,
  getReadGroupListQuery,
} from "./queryBuilder/getReadGroupListQuery";
import { execQuery } from "@/common/database/transaction";
import { GroupId, GroupName } from "@/class/group";

export type ReadGroupList = {
  id: GroupId;
  name: GroupName;
};

/**
 * 所属しているグループの一覧を取得する関数
 * @param userId
 * @returns
 */
export const readGroupList = async (userId: UserId) => {
  const params = getReadGroupListQuery({ userId });

  const result = await execQuery<OriginReadGroupList>(params);
  const groupList: ReadGroupList[] = result.rows.map((group) => {
    return {
      id: new GroupId(group.id),
      name: new GroupName(group.name),
    };
  });

  return groupList;
};
