import ColumnDiv from "@/components/layouts/div/ColumnDiv";
import RowDiv from "@/components/layouts/div/RowDiv";
import { usePageNavigate } from "@/hooks/usePageNavigate";
import { Button, ButtonProps } from "@mui/joy";

/**
 * アプリのトップページ
 * @returns
 */
const TopPage = () => {
  const appButtonProp: ButtonProps = {
    variant: "soft",
  };
  const { handlePageNavigate } = usePageNavigate();

  return (
    <ColumnDiv width={"100%"} height={"100%"}>
      <RowDiv>
        <Button
          {...appButtonProp}
          onClick={handlePageNavigate("/account/register_user")}
        >
          ユーザ登録
        </Button>
      </RowDiv>
    </ColumnDiv>
  );
};

export default TopPage;
