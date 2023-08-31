import ColumnDiv from "@/components/layouts/div/ColumnDiv";
import { Divider, List, ListItem } from "@mui/joy";
import ProjectList from "./ProjectList";
import GroupList from "./GroupList";

const MainSideNav = () => {
  return (
    <ColumnDiv
      width={"100%"}
      height={"100%"}
      borderRight={"1px solid"}
      borderColor={"divider"}
      sx={{ overflowY: "auto", overflowX: "hidden" }}
    >
      <List
        sx={{
          width: "100%",
          flexGrow: "unset",
          alignItems: "start",
        }}
      >
        <ListItem>自分のタスク</ListItem>
        <ListItem>通知</ListItem>
      </List>

      <Divider />
      <ProjectList />

      <Divider />
      <GroupList />
    </ColumnDiv>
  );
};

export default MainSideNav;
