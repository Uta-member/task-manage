import { Grid, GridProps, GridTypeMap } from "@mui/joy";
import { OverridableComponent } from "@mui/material/OverridableComponent";

/**
 * Divのベースコンポーネント。
 * 基本的にはそのまま使わず、RowoDivかColumnDivを使う。
 * @param props
 * @returns
 */
const BaseDiv: OverridableComponent<GridTypeMap<{}, "div">> = (
  props: GridProps
) => {
  return (
    <Grid
      container
      flexWrap={"nowrap"}
      alignItems={"center"}
      justifyContent={"start"}
      {...props}
    />
  );
};

export default BaseDiv;
