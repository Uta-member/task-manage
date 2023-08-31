import RowDiv from "@/components/layouts/div/RowDiv";
import {
  Button,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  Typography,
} from "@mui/joy";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { usePageNavigate } from "@/hooks/usePageNavigate";
import { useUserInfo } from "@/hooks/useUserInfo";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  switchNavOpen: () => void;
};

/**
 * アプリのメインのヘッダー
 * @returns
 */
const MainHeader = (props: Props) => {
  const { switchNavOpen } = props;

  const { handlePageNavigate } = usePageNavigate();
  const { userInfoState, logout } = useUserInfo();

  return (
    <RowDiv
      width={"100%"}
      height={"100%"}
      borderBottom={"1px solid"}
      borderColor={"divider"}
    >
      <RowDiv xs={6} gap={"5px"} paddingX={"10px"}>
        <Button
          size={"sm"}
          variant={"plain"}
          color={"neutral"}
          onClick={switchNavOpen}
        >
          <MenuIcon />
        </Button>
        <Button variant="plain" onClick={handlePageNavigate("/app/")}>
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
        <Dropdown>
          <MenuButton startDecorator={<AccountCircle />}>
            {userInfoState
              ? `${userInfoState.name.value}さん`
              : "ユーザ情報なし"}
          </MenuButton>
          <Menu>
            <MenuItem onClick={logout}>ログアウト</MenuItem>
          </Menu>
        </Dropdown>
      </RowDiv>
    </RowDiv>
  );
};

export default MainHeader;
