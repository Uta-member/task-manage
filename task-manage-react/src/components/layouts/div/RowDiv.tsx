import BaseDiv from "./BaseDiv";
import { GridProps, GridTypeMap } from "@mui/joy";
import { OverridableComponent } from "@mui/material/OverridableComponent";

/**
 * 水平方向のDiv
 * @param props
 * @returns
 */
const RowDiv: OverridableComponent<GridTypeMap<{}, "div">> = (
  props: GridProps
) => {
  return <BaseDiv {...props} />;
};

export default RowDiv;
