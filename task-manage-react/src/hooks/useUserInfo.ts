import { readUser } from "@/apiFunctions/user/readUser";
import { User, UserId } from "@/class/user";
import { userPool } from "@/common/cognitoInfo";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { usePageNavigate } from "./usePageNavigate";

const userAtom = atomWithStorage<User | null>("user-atom", null);
const userIdAtom = atomWithStorage<UserId | null>("user-id-atom", null);

/**
 * ログイン中のユーザ情報を管理するカスタムフック
 * @returns
 */
export const useUserInfo = () => {
  const [userInfoState, setUserInfoState] = useAtom(userAtom);
  const [userIdState, setUserIdState] = useAtom(userIdAtom);
  const { pageNavigate } = usePageNavigate();

  const setCurrentUserLatestInfo = async () => {
    try {
      if (userIdState === null) {
        return;
      }
      const result = await readUser(userIdState);
      if (!result.isSuccess || result.user === undefined) {
        return;
      }
      setUserInfoState(result.user);
    } catch {}
  };

  const setUser = async (userId: UserId) => {
    try {
      setUserIdState(userId);
      const result = await readUser(userId);
      if (!result.isSuccess || result.user === undefined) {
        return;
      }
      setUserInfoState(result.user);
    } catch {}
  };

  const resetUserInfo = () => {
    setUserIdState(null);
    setUserInfoState(null);
  };

  const logout = () => {
    resetUserInfo();
    // 現在のユーザを取得する
    const cognitoUser = userPool.getCurrentUser();
    // 現在のユーザがもし入っていた場合はログアウト処理
    if (cognitoUser) {
      cognitoUser.signOut();
      localStorage.clear();
    } else {
      // もしいなかった場合でもローカルストレージを一度クリアにする
      localStorage.clear();
    }
    pageNavigate("/account/login");
  };

  return {
    userInfoState,
    setUser,
    setCurrentUserLatestInfo,
    logout,
  };
};
