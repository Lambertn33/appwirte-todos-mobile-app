import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { HomeCards } from "@/components/home/HomeCards";
import { AppButton, AppText, AppView } from "@/components/ui";

interface HomeCardsProps {
  title: string;
  icon: React.ReactNode;
}

export default function Home() {
  const cardsData: HomeCardsProps[] = [
    {
        title: "Management",
        icon: <MaterialIcons name="task" size={64} color="#3b82f6" />
    },
    {
        title: "Stay organized",
        icon: <MaterialIcons name="category" size={64} color="#3b82f6" />
    },
    {
        title: "Progress tracking",
        icon: <MaterialIcons name="bar-chart" size={64} color="#3b82f6" />
    },
    {
        title: "Get things done",
        icon: <MaterialIcons name="done" size={64} color="#3b82f6" />
    },
];  
  return (
    <SafeAreaView className="flex-1 bg-blue-50" edges={["top", "bottom"]}>
      <AppView className="flex-1 px-6">
        <AppView className="flex-1 items-center justify-center">
          <AppText className="text-4xl font-bold text-gray-900 mb-4 text-center">Welcome to Todos</AppText>
          <AppView className="w-full max-w-md items-center">
            <AppText className="text-xl text-gray-700 text-center leading-7">
              Stay organized and productive. Manage your tasks efficiently with our simple and intuitive todo app.
            </AppText>
          </AppView>
        </AppView>

        <AppView className="w-full pb-6 flex-1">
          <HomeCards cardsData={cardsData} />
        </AppView>

        <AppView className="w-full pb-6">
          <Link href="/(auth)/login" asChild>
            <AppButton className="bg-blue-600 px-8 py-4 rounded-full shadow-lg active:bg-blue-700">
              <AppText className="text-white text-lg font-semibold text-center">
                Get Started
              </AppText>
            </AppButton>
          </Link>
          <Link href="/profile" asChild>
            <AppButton className="bg-blue-600 px-8 py-4 rounded-full shadow-lg active:bg-blue-700">
              <AppText className="text-white text-lg font-semibold text-center">
                Profile
              </AppText>
            </AppButton>
          </Link>
        </AppView>
      </AppView>
    </SafeAreaView>
  );
}
