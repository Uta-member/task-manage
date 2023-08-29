import {
  Email,
  EmailType,
  User,
  UserId,
  UserIdType,
  UserName,
  UserNameType,
  UserPassword,
  UserPasswordType,
} from "@/class/user";
import ColumnDiv from "@/components/layouts/div/ColumnDiv";
import { Typography, Button } from "@mui/joy";
import EmailInput from "./EmailInput";
import NameInput from "./NameInput";
import PasswordInput from "./PasswordInput";
import UserIdInput from "./UserIdInput";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePageNavigate } from "@/hooks/usePageNavigate";
import AppTitle from "@/components/appAssets/AppTitle";
import { createUser } from "@/apiFunctions/user/createUser";

export type RegisterUserInputs = {
  id: UserIdType;
  email: EmailType;
  password: UserPasswordType;
  name: UserNameType;
};

const RegisterUserPage = () => {
  const [errMessageState, setErrMessageState] = useState<string>("");

  const { control, handleSubmit } = useForm<RegisterUserInputs>({
    defaultValues: {
      id: "",
      name: "",
      email: "",
      password: "",
    },
  });

  const { pageNavigate } = usePageNavigate();

  /**
   * アカウント登録処理
   * @param email
   * @param password
   */
  const signUp = async (
    id: UserIdType,
    email: EmailType,
    password: UserPasswordType,
    name: UserNameType
  ) => {
    setErrMessageState("");
    try {
      const result = await createUser({
        user: new User({
          id: new UserId(id),
          name: new UserName(name),
          email: new Email(email),
        }),
        password: new UserPassword(password),
      });
      const resData = result.data;
      if (resData.isSuccess) {
        pageNavigate(`/account/auth/${id}`);
      } else {
        setErrMessageState(resData.err?.errMessage ?? "登録に失敗しました");
      }
    } catch {
      setErrMessageState("登録に失敗しました");
    }
  };

  /**
   * サブミット処理
   * @param data
   */
  const onSubmit: SubmitHandler<RegisterUserInputs> = (data) => {
    signUp(data.id, data.email, data.password, data.name);
  };

  return (
    <ColumnDiv
      width={"100%"}
      height={"100%"}
      gap={"40px"}
      padding={"50px"}
      overflow={"auto"}
    >
      <AppTitle />

      <ColumnDiv
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        border={"1px solid"}
        borderColor={"divider"}
        borderRadius={"10px"}
        paddingX={"50px"}
        paddingY={"20px"}
        gap={"10px"}
        width={"500px"}
      >
        <Typography color={"danger"}>{errMessageState}</Typography>
        <UserIdInput control={control} />
        <NameInput control={control} />
        <EmailInput control={control} />
        <PasswordInput control={control} />
        <Button fullWidth type={"submit"}>
          登録
        </Button>
      </ColumnDiv>
    </ColumnDiv>
  );
};

export default RegisterUserPage;
