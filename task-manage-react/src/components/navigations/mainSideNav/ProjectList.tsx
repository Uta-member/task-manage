import { List, ListItem } from "@mui/joy";

const ProjectList = () => {
  return (
    <List sx={{ width: "100%", flexGrow: "unset", alignItems: "start" }}>
      <ListItem sx={{ fontWeight: "600" }}>お気に入りプロジェクト</ListItem>
    </List>
  );
};

export default ProjectList;
