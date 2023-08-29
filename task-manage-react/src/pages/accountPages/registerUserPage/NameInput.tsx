import { Control, Controller, RegisterOptions } from "react-hook-form";
import FormInput from "@/components/inputs/FormInput";
import { RegisterUserInputs } from "./RegisterUserPage";

type Props = {
  control: Control<RegisterUserInputs, any>;
};

const validationRule:
  | Omit<
      RegisterOptions<RegisterUserInputs, "name">,
      "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >
  | undefined = {
  required: "ユーザ名を入力してください",
  minLength: {
    value: 2,
    message: "2文字以上で入力してください",
  },
};

/**
 * ユーザ名の入力欄
 * @param props
 * @returns
 */
const NameInput = (props: Props) => {
  const { control } = props;

  return (
    <Controller
      name="name"
      control={control}
      rules={validationRule}
      render={({ field, fieldState }) => (
        <FormInput
          {...field}
          error={fieldState.invalid}
          formLabel={"ユーザ名"}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default NameInput;
