import { TodosProvider } from "@/contexts/TodosContext";
import { UserProvider } from "@/contexts/UserContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  return (
    <UserProvider>
      <TodosProvider>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaProvider>
      </TodosProvider>
    </UserProvider>
  );
}
