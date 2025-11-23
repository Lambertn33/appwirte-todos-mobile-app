import { AppButton, AppText, AppTextInput, AppView } from "@/components/ui";
import AppLoader from "@/components/ui/AppLoader";
import { useUser } from "@/hooks/useUser";
import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
  const { register, isLoading } = useUser();
  const [userData, setUserData] = useState<{ name: string; email: string; password: string; confirmPassword: string }>(
    { name: "", email: "", password: "", confirmPassword: "" }
  );
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);
    try {
      await register(userData.name, userData.email, userData.password);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-blue-50" edges={["top", "bottom"]}>
        <AppLoader />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-blue-50" edges={["top", "bottom"]}>
      <AppView className="flex-1 px-6 justify-center">
        <AppView className="w-full max-w-md mx-auto">
          <AppText className="text-4xl font-bold text-gray-900 mb-2 text-center">
            Create Account
          </AppText>
          <AppText className="text-lg text-gray-600 mb-8 text-center">
            Sign up to get started
          </AppText>

          {error && (
            <AppText className="text-red-400 font-extrabold text-xl text-center mb-4">{error}</AppText>
          )}

          <AppView 
            className="bg-white rounded-xl p-6 mb-6"
            style={styles.formContainer}
          >
            <AppTextInput
              label="Full Name"
              placeholder="Enter your full name"
              value={userData.name}
              onChangeText={(text) => setUserData({ ...userData, name: text })}
              autoCapitalize="words"
              autoComplete="name"
              showSoftInputOnFocus={true}
              textInputClassName="w-full h-14 rounded-full border border-gray-300 px-4 py-2 bg-white"
            />

            <AppTextInput
              label="Email"
              placeholder="Enter your email"
              value={userData.email}
              onChangeText={(text) => setUserData({ ...userData, email: text })}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              showSoftInputOnFocus={true}
              textInputClassName="w-full h-14 rounded-full border border-gray-300 px-4 py-2 bg-white"
            />

            <AppTextInput
              label="Password"
              placeholder="Enter your password"
              value={userData.password}
              onChangeText={(text) => setUserData({ ...userData, password: text })}
              secureTextEntry
              autoCapitalize="none"
              autoComplete="password-new"
              showSoftInputOnFocus={true}
              textInputClassName="w-full h-14 rounded-full border border-gray-300 px-4 py-2 bg-white"
            />

            <AppTextInput
              label="Confirm Password"
              placeholder="Confirm your password"
              value={userData.confirmPassword}
              onChangeText={(text) => setUserData({ ...userData, confirmPassword: text })}
              secureTextEntry
              autoCapitalize="none"
              autoComplete="password-new"
              showSoftInputOnFocus={true}
              textInputClassName="w-full h-14 rounded-full border border-gray-300 px-4 py-2 bg-white"
            />

            <AppButton
              onPress={handleSubmit}
              className="bg-blue-600 px-8 py-4 rounded-full shadow-lg active:bg-blue-700"
            >
              <AppText className="text-white text-lg font-semibold text-center">
                Sign Up
              </AppText>
            </AppButton>
          </AppView>

          <AppView className="items-center">
            <Link href="/" asChild>
              <AppButton className="bg-transparent">
                <AppText className="text-blue-600 text-base font-medium">
                  ← Back to Home
                </AppText>
              </AppButton>
            </Link>
          </AppView>
        </AppView>
      </AppView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

