import { GroupName, GroupNameType } from "@/class/group";
import ColumnDiv from "@/components/layouts/div/ColumnDiv";
import { Button, Modal, ModalDialog, Typography } from "@mui/joy";
import { SubmitHandler, useForm } from "react-hook-form";
import GroupNameInput from "./GroupNameInput";
import { useState } from "react";
import { createGroup } from "@/apiFunctions/group/createGroup";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useGroup } from "@/hooks/useGroup";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export type CreateGroupInputs = {
  groupName: GroupNameType;
};

const GroupRegisterDialog = (props: Props) => {
  const { isOpen, handleClose } = props;

  const [errMessageState, setErrMessageState] = useState<string>("");

  const { control, handleSubmit } = useForm<CreateGroupInputs>({
    defaultValues: {
      groupName: "",
    },
  });

  const { userInfoState, setCurrentUserLatestInfo } = useUserInfo();
  const { setLatestGroupList } = useGroup();

  /**
   * サブミット処理
   * @param data
   */
  const onSubmit: SubmitHandler<CreateGroupInputs> = async (data) => {
    try {
      if (userInfoState === null) {
        setCurrentUserLatestInfo();
        throw new Error("ユーザ情報がありません");
      }
      const result = await createGroup({
        groupName: new GroupName(data.groupName),
        userId: userInfoState.id,
      });

      if (!result.data.isSuccess) {
        throw new Error("グループ作成に失敗しました");
      }
      setLatestGroupList();
      handleClose();
    } catch (err) {
      setErrMessageState("グループ作成に失敗しました");
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ModalDialog sx={{ maxWidth: 500 }}>
        <ColumnDiv gap={"20px"}>
          <Typography alignSelf={"start"} fontWeight={"600"}>
            グループ作成
          </Typography>
          <ColumnDiv component={"form"} onSubmit={handleSubmit(onSubmit)}>
            <Typography color={"danger"}>{errMessageState}</Typography>
            <GroupNameInput control={control} />
            <Button type={"submit"}>作成</Button>
          </ColumnDiv>
        </ColumnDiv>
      </ModalDialog>
    </Modal>
  );
};

export default GroupRegisterDialog;
