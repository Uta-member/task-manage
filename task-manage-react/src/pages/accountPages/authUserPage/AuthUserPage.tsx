import { UserId, UserIdType } from "@/class/user";
import AppTitle from "@/components/appAssets/AppTitle";
import ColumnDiv from "@/components/layouts/div/ColumnDiv";
import { usePageNavigate } from "@/hooks/usePageNavigate";
import { Typography, Button, Modal, Sheet, Stack } from "@mui/joy";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import CodeInput from "./CodeInput";
import { authorizeUser } from "@/apiFunctions/user/authorizeUser";

export type AccountAuthInputs = {
  code: string;
};

const AuthUserPage = () => {
  const [errMessageState, setErrMessageState] = useState<string>("");
  const [dialogOpenState, setDialogOpenState] = useState(false);

  const { handlePageNavigate } = usePageNavigate();

  const { control, handleSubmit } = useForm<AccountAuthInputs>({
    defaultValues: {
      code: "",
    },
  });

  const params = useParams();
  const userId = new UserId(params.id ?? "");

  const authorize = async (id: UserIdType, code: string) => {
    try {
      const result = await authorizeUser({
        userId: new UserId(id),
        verificationCode: code,
      });
      const resData = result.data;
      if (!resData.isSuccess) {
        throw new Error("認証に失敗しました");
      }
      setDialogOpenState(true);
    } catch (err) {
      setErrMessageState("認証に失敗しました");
    }
  };

  /**
   * サブミット処理
   * @param data
   */
  const onSubmit: SubmitHandler<AccountAuthInputs> = (data) => {
    authorize(userId.value, data.code);
  };

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
        <Typography>
          メールで受信した確認コードを入力し、アカウントを有効化してください
        </Typography>
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
        <Typography alignSelf={"start"}>ユーザID: {userId.value}</Typography>
        <CodeInput control={control} />
        <Button fullWidth type={"submit"}>
          認証
        </Button>
      </ColumnDiv>

      <Modal
        open={dialogOpenState}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            padding: "30px",
            borderRadius: "md",
            boxShadow: "lg",
          }}
        >
          <Stack gap={"10px"}>
            <Typography>認証成功しました</Typography>
            <Typography>ログインしなおしてください</Typography>
            <Button onClick={handlePageNavigate("/account/login")}>
              ログインページへ
            </Button>
          </Stack>
        </Sheet>
      </Modal>
    </ColumnDiv>
  );
};

export default AuthUserPage;
