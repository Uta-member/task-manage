import ColumnDiv from "@/components/layouts/div/ColumnDiv";
import { Divider, List, ListItemButton } from "@mui/joy";
import ProjectList from "./ProjectList";
import GroupList from "./groupList/GroupList";

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
        <ListItemButton>自分のタスク</ListItemButton>
        <ListItemButton>通知</ListItemButton>
      </List>

      <Divider />
      <ProjectList />

      <Divider />
      <GroupList />
    </ColumnDiv>
  );
};

export default MainSideNav;
