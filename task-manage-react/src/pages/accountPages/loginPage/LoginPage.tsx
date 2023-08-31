import {
  UserId,
  UserIdType,
  UserPassword,
  UserPasswordType,
} from "@/class/user";
import { userPool } from "@/common/cognitoInfo";
import AppTitle from "@/components/appAssets/AppTitle";
import ColumnDiv from "@/components/layouts/div/ColumnDiv";
import { usePageNavigate } from "@/hooks/usePageNavigate";
import { Button, Typography } from "@mui/joy";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import UserIdInput from "./UserIdInput";
import PasswordInput from "./PasswordInput";
import { useUserInfo } from "@/hooks/useUserInfo";

export type LoginInputs = {
  id: UserIdType;
  password: UserPasswordType;
};

const LoginPage = () => {
  const [errMessageState, setErrMessageState] = useState<string>("");

  const { setUser, logout } = useUserInfo();

  const { control, handleSubmit, resetField } = useForm<LoginInputs>({
    defaultValues: {
      id: "",
      password: "",
    },
  });

  const { pageNavigate } = usePageNavigate();

  /**
   * ログイン失敗時の処理
   * @param err
   */
  const handleRegisterError = (err: Error, userId?: UserId) => {
    if (err.name === "UserNotConfirmedException" && userId !== undefined) {
      setErrMessageState("認証されていないメールアドレスです");
      pageNavigate(`/account/auth/${userId.value}`);
    } else {
      setErrMessageState("ログインに失敗しました");
    }
  };

  /**
   * ログイン処理
   * @param userId
   * @param password
   */
  const signIn = (userId: UserId, password: UserPassword) => {
    const authenticationDetails = new AuthenticationDetails({
      Username: userId.value,
      Password: password.value,
    });
    const cognitoUser = new CognitoUser({
      Username: userId.value,
      Pool: userPool,
    });

    cognitoUser.authenticateUser(authenticationDetails, {
      // 成功時
      onSuccess: async (_result) => {
        try {
          await setUser(userId);
          pageNavigate("/app/");
        } catch (err) {
          logout();
          setErrMessageState(
            "ログインに失敗しました。システム担当者に問い合わせてください。"
          );
          resetField("password");
        }
      },
      // 失敗時
      onFailure: (err) => {
        logout();
        resetField("password");
        if (err instanceof Error) {
          handleRegisterError(err, userId);
        } else {
          setErrMessageState("ログインに失敗しました");
        }
      },
    });
  };

  /**
   * サブミット処理
   * @param data
   */
  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    try {
      signIn(new UserId(data.id), new UserPassword(data.password));
    } catch (err) {
      setErrMessageState("ログインに失敗しました");
    }
  };

  const { handlePageNavigate } = usePageNavigate();
  return (
    <ColumnDiv
      width={"100%"}
      height={"100%"}
      gap={"40px"}
      padding={"50px"}
      overflow={"auto"}
    >
      <ColumnDiv gap={"20px"}>
        <AppTitle />
        <Typography>ユーザ情報を入力しログインしてください</Typography>
      </ColumnDiv>

      <ColumnDiv
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        border={"1px solid"}
        borderColor={"divider"}
        borderRadius={"10px"}
        paddingX={"50px"}
        paddingY={"20px"}
        paddingBottom={"50px"}
        gap={"30px"}
        width={"500px"}
      >
        <Typography color={"danger"}>{errMessageState}</Typography>
        <UserIdInput control={control} />
        <PasswordInput control={control} />
        <Button fullWidth type={"submit"}>
          ログイン
        </Button>
        <Button
          variant={"plain"}
          onClick={handlePageNavigate("/account/register_user")}
        >
          初めて利用される方（新規登録）
        </Button>
      </ColumnDiv>
    </ColumnDiv>
  );
};

export default LoginPage;
