import Authenticated from '@/components/auth/Authenticated';
import { Tabs } from 'expo-router';
import React from 'react';

const DashboardLayout = () => {
  return (
    <Authenticated>
        <Tabs>
             <Tabs.Screen name="profile" options={{ title: "Profile" }} />
        </Tabs>
    </Authenticated>
  )
}

export default DashboardLayout