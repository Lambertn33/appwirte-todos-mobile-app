import { TextInput, TextInputProps } from "react-native";
import { AppText } from "./AppText";
import { AppView } from "./AppView";


interface AppTextInputProps extends TextInputProps {
  label?: string;
  textInputClassName: string;
}

export const AppTextInput = ({ label, textInputClassName, ...props }: AppTextInputProps) => {
  return <AppView className="mb-4">
  <AppText className="text-gray-700 text-xl font-semibold mb-2">{label}</AppText>
  <TextInput
    className={textInputClassName}
    {...props}
  />
</AppView>
};