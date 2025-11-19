import { Text, TextProps } from "react-native";

export const AppText = ({ children, ...props }: TextProps) => {
  return <Text {...props}>{children}</Text>;
};

