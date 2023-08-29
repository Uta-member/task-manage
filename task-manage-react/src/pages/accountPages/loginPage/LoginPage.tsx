import AppTitle from "@/components/appAssets/AppTitle";
import ColumnDiv from "@/components/layouts/div/ColumnDiv";
import { usePageNavigate } from "@/hooks/usePageNavigate";
import { Button } from "@mui/joy";

const LoginPage = () => {
  const { handlePageNavigate } = usePageNavigate();
  return (
    <ColumnDiv width={"100%"} height={"100%"}>
      <AppTitle />
      <Button onClick={handlePageNavigate("/account/register_user")}>
        新規登録
      </Button>
    </ColumnDiv>
  );
};

export default LoginPage;
