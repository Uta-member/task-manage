import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePageNavigate } from "@/hooks/usePageNavigate";
import { userPool } from "@/common/cognitoInfo";
import { useUserInfo } from "@/hooks/useUserInfo";
import { UserId } from "@/class/user";

//#region Types
type Props = {
  children: ReactNode;
};
//#endregion

/**
 * 認可を行うオブジェクト。
 * ログインされていればchildrenの要素を表示し、
 * ログインしてなかったらログイン画面に飛ばす
 * @param props
 * @returns
 */
const Authorization = (props: Props) => {
  //#region Props
  const { children } = props;
  //#endregion

  //#region Hooks
  const { pageNavigate } = usePageNavigate();
  const location = useLocation();
  const { setUser, userInfoState, logout } = useUserInfo();
  //#endregion

  //#region 関数
  const auth = async () => {
    // 認証されていればuserにオブジェクトが入っているはずなので、それを検証する
    const user = userPool.getCurrentUser();
    if (user == null) {
      logout();
      pageNavigate("/account/login");
      return;
    }
    const userId = new UserId(await user.getUsername());
    if (userInfoState === null || userInfoState.id.value !== userId.value) {
      setUser(userId);
    }
  };

  const handleWindowFocus = () => {
    auth();
  };
  //#endregion

  //#region Effects
  useEffect(() => {
    window.addEventListener("focus", handleWindowFocus);
    return () => {
      window.removeEventListener("focus", handleWindowFocus);
    };
  }, []);
  useEffect(() => {
    auth();
  }, [location]);
  //#endregion

  //#region JSX
  return <>{children}</>;
  //#endregion
};

export default Authorization;
