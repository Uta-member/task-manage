import ColumnDiv from "@/components/layouts/div/ColumnDiv";
import RowDiv from "@/components/layouts/div/RowDiv";
import { Typography } from "@mui/joy";

const TaskBoard = () => {
  const boardHeaderHeight = "50px";
  return (
    <ColumnDiv width={"100%"} height={"100%"}>
      <RowDiv width={"100%"} height={boardHeaderHeight}>
        <Typography>ボード名</Typography>
      </RowDiv>
      <ColumnDiv
        width={"100%"}
        height={`calc(100% - ${boardHeaderHeight})`}
        overflow={"auto"}
      >
        <Typography>タスクたち</Typography>
      </ColumnDiv>
    </ColumnDiv>
  );
};

export default TaskBoard;
