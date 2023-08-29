import RowDiv from "@/components/layouts/div/RowDiv";
import { Button, ButtonProps, Typography } from "@mui/joy";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationIcon from "@mui/icons-material/Notifications";

/**
 * アプリのメインのヘッダー
 * @returns
 */
const MainHeader = () => {
  const iconButtonProps: ButtonProps = {
    size: "sm",
    variant: "outlined",
    sx: {
      borderColor: "neutral.outlinedBorder",
    },
  };

  return (
    <RowDiv
      width={"100%"}
      height={"100%"}
      borderBottom={"1px solid"}
      borderColor={"divider"}
    >
      <RowDiv xs={6} gap={"10px"} paddingX={"10px"}>
        <Button
          variant="plain"
          startDecorator={<img src={"/green.png"} height={"35px"} />}
        >
          <Typography component={"h1"} fontWeight={600}>
            タスク管理システム
          </Typography>
        </Button>
      </RowDiv>
      <RowDiv
        xs={6}
        flexDirection={"row-reverse"}
        justifyContent={"end"}
        gap={"10px"}
        paddingX={"10px"}
      >
        <Button {...iconButtonProps} startDecorator={<AccountCircle />}>
          〇〇さん
        </Button>
        <Button {...iconButtonProps} startDecorator={<NotificationIcon />}>
          通知
        </Button>
      </RowDiv>
    </RowDiv>
  );
};

export default MainHeader;
