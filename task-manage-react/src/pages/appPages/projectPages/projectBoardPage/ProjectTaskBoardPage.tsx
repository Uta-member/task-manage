import ColumnDiv from "@/components/layouts/div/ColumnDiv";
import RowDiv from "@/components/layouts/div/RowDiv";
import { Typography } from "@mui/joy";
import TaskBoard from "./taskBoard/TaskBoard";

const ProjectTaskBoardPage = () => {
  return (
    <ColumnDiv width={"100%"} height={"100%"}>
      <Typography>タスクボード</Typography>
      <RowDiv sx={{ overflowX: "auto", overflowY: "hidden" }}>
        <TaskBoard />
        <TaskBoard />
      </RowDiv>
    </ColumnDiv>
  );
};

export default ProjectTaskBoardPage;
