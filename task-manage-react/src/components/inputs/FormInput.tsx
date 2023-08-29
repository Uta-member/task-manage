import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from "@mui/joy";
import { forwardRef } from "react";

type Props = InputProps & {
  formLabel: string;
  helperText?: string;
};

/**
 * Inputコントロール
 * @param props
 * @returns
 */
const FormInput = forwardRef<HTMLInputElement, Props>(
  ({ formLabel, helperText, ...props }, ref) => {
    return (
      <FormControl error sx={{ width: "100%" }}>
        <FormLabel>{formLabel}</FormLabel>
        <Input
          fullWidth
          variant={"soft"}
          placeholder={formLabel}
          {...props}
          ref={ref}
        />
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );
  }
);

export default FormInput;
