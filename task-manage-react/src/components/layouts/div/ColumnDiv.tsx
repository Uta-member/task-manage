import { GridTypeMap, GridProps } from "@mui/joy";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import BaseDiv from "./BaseDiv";

/**
 * 垂直方向のDiv
 * @param props
 * @returns
 */
const ColumnDiv: OverridableComponent<GridTypeMap<{}, "div">> = (
  props: GridProps
) => {
  return <BaseDiv flexDirection={"column"} {...props} />;
};

export default ColumnDiv;
