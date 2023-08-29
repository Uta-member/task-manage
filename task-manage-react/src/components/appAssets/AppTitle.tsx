import RowDiv from "@/components/layouts/div/RowDiv";
import { Typography } from "@mui/joy";

const AppTitle = () => {
  return (
    <RowDiv gap={"20px"}>
      <Typography component={"h1"} fontSize={"2.5em"}>
        タスク管理アプリ
      </Typography>
    </RowDiv>
  );
};

export default AppTitle;
