import { Control, Controller, RegisterOptions } from "react-hook-form";
import FormInput from "@/components/inputs/FormInput";
import { AccountAuthInputs } from "./AuthUserPage";

type Props = {
  control: Control<AccountAuthInputs, any>;
};

const validationRule:
  | Omit<
      RegisterOptions<AccountAuthInputs, "code">,
      "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >
  | undefined = {
  required: "認証コードを入力してください",
};

/**
 * 認証コードの入力欄
 * @param props
 * @returns
 */
const CodeInput = (props: Props) => {
  const { control } = props;

  return (
    <Controller
      name="code"
      control={control}
      rules={validationRule}
      render={({ field, fieldState }) => (
        <FormInput
          {...field}
          error={fieldState.invalid}
          formLabel={"認証コード"}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default CodeInput;
