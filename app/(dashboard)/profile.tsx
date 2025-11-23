import React from 'react';

import { AppButton } from '@/components/ui/AppButton';
import { AppCard } from '@/components/ui/AppCard';
import { AppText } from '@/components/ui/AppText';
import { AppView } from '@/components/ui/AppView';
import { useUser } from '@/hooks/useUser';
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  const { logout, user } = useUser();

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <SafeAreaView className="flex-1 bg-blue-50" edges={["top", "bottom"]}>
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        <AppView className="flex-1 px-6 pt-8">
          {/* Header Section */}
          <AppView className="items-center mb-8">
            <AppText className="text-4xl font-bold text-gray-900 mb-2">Profile</AppText>
            <AppText className="text-lg text-gray-600">Manage your account</AppText>
          </AppView>

          {/* Profile Avatar Section */}
          <AppView className="items-center mb-8">
            <AppView className="w-32 h-32 bg-blue-600 rounded-full items-center justify-center mb-4 shadow-lg">
              {user?.name ? (
                <AppText className="text-white text-4xl font-bold">
                  {getInitials(user.name)}
                </AppText>
              ) : (
                <MaterialIcons name="person" size={64} color="#ffffff" />
              )}
            </AppView>
          </AppView>

          {/* User Information Card */}
          <AppCard className="mb-6">
            <AppView className="mb-6">
              <AppView className="flex-row items-center mb-4">
                <MaterialIcons name="person" size={24} color="#3b82f6" />
                <AppText className="text-gray-500 text-sm font-medium ml-2 uppercase tracking-wide">
                  Full Name
                </AppText>
              </AppView>
              <AppText className="text-gray-900 text-xl font-semibold ml-8">
                {user?.name || 'Not available'}
              </AppText>
            </AppView>

            <AppView className="border-t border-gray-200 pt-6">
              <AppView className="flex-row items-center mb-4">
                <MaterialIcons name="email" size={24} color="#3b82f6" />
                <AppText className="text-gray-500 text-sm font-medium ml-2 uppercase tracking-wide">
                  Email Address
                </AppText>
              </AppView>
              <AppText className="text-gray-900 text-xl font-semibold ml-8">
                {user?.email || 'Not available'}
              </AppText>
            </AppView>
          </AppCard>

          {/* Logout Button */}
          <AppView className="mt-auto pb-6">
            <AppButton 
              onPress={() => logout()} 
              className="bg-blue-600 px-8 py-4 rounded-full shadow-lg active:bg-blue-700"
            >
              <AppView className="flex-row items-center justify-center">
                <MaterialIcons name="logout" size={24} color="#ffffff" />
                <AppText className="text-white text-lg font-semibold ml-2">
                  Logout
                </AppText>
              </AppView>
            </AppButton>
          </AppView>
        </AppView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;