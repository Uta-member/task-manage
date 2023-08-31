import { readGroupList } from "@/apiFunctions/group/readGroupList";
import { GroupId, GroupName } from "@/class/group";
import { UserId } from "@/class/user";
import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { useUserInfo } from "./useUserInfo";

const groupListAtom = atom<{ id: GroupId; name: GroupName }[]>([]);

export const useGroup = () => {
  const [groupListState, setGroupeListState] = useAtom(groupListAtom);
  const { userInfoState } = useUserInfo();

  const setGroupList = async (userId: UserId) => {
    try {
      const result = await readGroupList({ userId });

      if (!result.isSuccess || result.groupList === undefined) {
        setGroupeListState([]);
        return;
      }

      setGroupeListState(result.groupList);
    } catch {}
  };

  const resetGroupList = () => {
    setGroupeListState([]);
  };

  const setLatestGroupList = () => {
    if (userInfoState) {
      setGroupList(userInfoState.id);
    }
  };

  useEffect(() => {
    setLatestGroupList();
  }, [userInfoState]);

  return {
    groupListState,
    setLatestGroupList,
    resetGroupList,
  };
};
