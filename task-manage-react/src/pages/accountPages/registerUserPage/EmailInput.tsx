import { Control, Controller, RegisterOptions } from "react-hook-form";
import FormInput from "@/components/inputs/FormInput";
import { RegisterUserInputs } from "./RegisterUserPage";

type Props = {
  control: Control<RegisterUserInputs, any>;
};

const validationRule:
  | Omit<
      RegisterOptions<RegisterUserInputs, "email">,
      "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >
  | undefined = {
  required: "Eメールアドレスを入力してください",
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "メールアドレスの形式が不正です",
  },
};

/**
 * email入力欄
 * @param props
 * @returns
 */
const EmailInput = (props: Props) => {
  const { control } = props;

  return (
    <Controller
      name="email"
      control={control}
      rules={validationRule}
      render={({ field, fieldState }) => (
        <FormInput
          {...field}
          type="email"
          error={fieldState.invalid}
          formLabel={"Eメールアドレス"}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default EmailInput;
