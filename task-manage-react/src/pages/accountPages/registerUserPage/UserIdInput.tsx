import { Control, Controller, RegisterOptions } from "react-hook-form";
import FormInput from "@/components/inputs/FormInput";
import { RegisterUserInputs } from "./RegisterUserPage";

type Props = {
  control: Control<RegisterUserInputs, any>;
};

const validationRule:
  | Omit<
      RegisterOptions<RegisterUserInputs, "id">,
      "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >
  | undefined = {
  required: "ユーザIDを入力してください",
  minLength: {
    value: 5,
    message: "5文字以上で入力してください",
  },
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
