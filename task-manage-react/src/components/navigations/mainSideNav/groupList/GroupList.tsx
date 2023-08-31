import { useGroup } from "@/hooks/useGroup";
import { List, ListItem, ListItemButton } from "@mui/joy";
import GroupRegisterDialog from "./GroupRegisterDialog";
import { useState } from "react";

const GroupList = () => {
  const { groupListState } = useGroup();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <List sx={{ width: "100%", flexGrow: "unset", alignItems: "start" }}>
      <ListItem sx={{ fontWeight: "600" }}>グループ</ListItem>
      {groupListState.map((group) => {
        return (
          <ListItemButton key={group.id.value}>
            {group.name.value}
          </ListItemButton>
        );
      })}
      <ListItemButton onClick={handleDialogOpen}>+ グループ追加</ListItemButton>
      <GroupRegisterDialog
        isOpen={dialogOpen}
        handleClose={handleDialogClose}
      />
    </List>
  );
};

export default GroupList;
