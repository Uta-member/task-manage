import { useGroup } from "@/hooks/useGroup";
import { List, ListItem } from "@mui/joy";

const GroupList = () => {
  const { groupListState } = useGroup();
  return (
    <List sx={{ width: "100%", flexGrow: "unset", alignItems: "start" }}>
      <ListItem>グループ</ListItem>
      {groupListState.map((group) => {
        return <ListItem key={group.id.value}>{group.name.value}</ListItem>;
      })}
    </List>
  );
};

export default GroupList;
