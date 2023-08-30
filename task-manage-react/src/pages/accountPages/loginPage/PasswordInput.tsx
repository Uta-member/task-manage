import { Control, Controller, RegisterOptions } from "react-hook-form";
import FormInput from "@/components/inputs/FormInput";
import { LoginInputs } from "./LoginPage";

type Props = {
  control: Control<LoginInputs, any>;
};

const validationRule:
  | Omit<
      RegisterOptions<LoginInputs, "password">,
      "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >
  | undefined = {
  required: "パスワードを入力してください",
};

/**
 * パスワード入力欄
 * @param props
 * @returns
 */
const PasswordInput = (props: Props) => {
  const { control } = props;

  return (
    <Controller
      name="password"
      control={control}
      rules={validationRule}
      render={({ field, fieldState }) => (
        <FormInput
          {...field}
          type="password"
          error={fieldState.invalid}
          formLabel={"パスワード"}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default PasswordInput;
