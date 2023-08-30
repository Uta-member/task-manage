import { Control, Controller, RegisterOptions } from "react-hook-form";
import FormInput from "@/components/inputs/FormInput";
import { LoginInputs } from "./LoginPage";

type Props = {
  control: Control<LoginInputs, any>;
};

const validationRule:
  | Omit<
      RegisterOptions<LoginInputs, "id">,
      "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >
  | undefined = {
  required: "ユーザIDを入力してください",
};

/**
 * ユーザIDの入力欄
 * @param props
 * @returns
 */
const UserIdInput = (props: Props) => {
  const { control } = props;

  return (
    <Controller
      name="id"
      control={control}
      rules={validationRule}
      render={({ field, fieldState }) => (
        <FormInput
          {...field}
          error={fieldState.invalid}
          formLabel={"ユーザID"}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default UserIdInput;
