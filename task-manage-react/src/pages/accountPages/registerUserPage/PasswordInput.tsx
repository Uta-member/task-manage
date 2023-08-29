import { Control, Controller, RegisterOptions } from "react-hook-form";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RowDiv from "@/components/layouts/div/RowDiv";
import ColumnDiv from "@/components/layouts/div/ColumnDiv";
import FormInput from "@/components/inputs/FormInput";
import { RegisterUserInputs } from "./RegisterUserPage";

type Props = {
  control: Control<RegisterUserInputs, any>;
};

const charPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]+$/;
const lengthPattern = /^.{8,}$/;

const validationRule:
  | Omit<
      RegisterOptions<RegisterUserInputs, "password">,
      "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >
  | undefined = {
  required: "パスワードを入力してください",
  minLength: {
    value: 8,
    message: "8文字以上入力してください",
  },
  pattern: {
    value: charPattern,
    message: "半角小英字, 半角大英字, 数字をそれぞれ1文字以上含めてください",
  },
};

/**
 * パスワード入力欄
 * @param props
 * @returns
 */
const PasswordInput = (props: Props) => {
  const { control } = props;
  const [passwordState, setPasswordState] = useState("");

  const charPatternCheck = charPattern.test(passwordState);
  const lengthPatternCheck = lengthPattern.test(passwordState);

  return (
    <Controller
      name="password"
      control={control}
      rules={validationRule}
      render={({ field, fieldState }) => (
        <ColumnDiv alignItems={"start"} width={"100%"}>
          <FormInput
            {...field}
            type="password"
            error={fieldState.invalid}
            formLabel={"パスワード"}
            helperText={fieldState.error?.message}
            onChange={(e) => {
              field.onChange(e);
              setPasswordState(e.target.value);
            }}
          />
          <ColumnDiv fontSize={"0.8em"} alignItems={"start"}>
            <RowDiv gap={"5px"}>
              {charPatternCheck ? (
                <CheckCircleIcon color={"success"} />
              ) : (
                <CancelIcon color={"error"} />
              )}
              半角小英字, 半角大英字, 数字をそれぞれ1文字以上
            </RowDiv>
            <RowDiv gap={"5px"}>
              {lengthPatternCheck ? (
                <CheckCircleIcon color={"success"} />
              ) : (
                <CancelIcon color={"error"} />
              )}
              8文字以上
            </RowDiv>
          </ColumnDiv>
        </ColumnDiv>
      )}
    />
  );
};

export default PasswordInput;
