import { Control, Controller, RegisterOptions } from "react-hook-form";
import { CreateGroupInputs } from "./GroupRegisterDialog";
import FormInput from "@/components/inputs/FormInput";

type Props = {
  control: Control<CreateGroupInputs, any>;
};

const validationRule:
  | Omit<
      RegisterOptions<CreateGroupInputs, "groupName">,
      "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >
  | undefined = {
  required: "グループ名を入力してください",
};

const GroupNameInput = (props: Props) => {
  const { control } = props;

  return (
    <Controller
      name="groupName"
      control={control}
      rules={validationRule}
      render={({ field, fieldState }) => (
        <FormInput
          {...field}
          error={fieldState.invalid}
          formLabel={"グループ名"}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default GroupNameInput;
