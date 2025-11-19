import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export const AppButton = ({ children, ...props }: TouchableOpacityProps) => {
  return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
};

