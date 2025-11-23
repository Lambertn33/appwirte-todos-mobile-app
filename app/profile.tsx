import { AppButton } from '@/components/ui/AppButton';
import { AppText } from '@/components/ui/AppText';
import { useUser } from '@/hooks/useUser';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
    const { logout } = useUser();
  return (
    <SafeAreaView className="flex-1 bg-blue-50" edges={["top", "bottom"]}>
      <AppText>Profile</AppText>

      <AppButton onPress={() => logout()} className="bg-red-500 px-8 py-4 rounded-full shadow-lg active:bg-red-600">
        <AppText className="text-white text-lg font-semibold text-center">Logout</AppText>
      </AppButton>
    </SafeAreaView>
  );
};

export default Profile;