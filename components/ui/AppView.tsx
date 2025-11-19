import { View, ViewProps } from "react-native";

export const AppView = ({ children, ...props }: ViewProps) => {
  return <View {...props}>{children}</View>;
};

