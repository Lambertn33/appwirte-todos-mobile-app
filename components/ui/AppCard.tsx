import { View, ViewProps } from "react-native";

export const AppCard = ({ children, ...props }: ViewProps) => {
  return <View className="bg-white rounded-lg shadow-md p-6" {...props}>{children}</View>;
};