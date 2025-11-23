import AppLoader from '@/components/ui/AppLoader';
import { useUser } from '@/hooks/useUser';
import { Redirect } from 'expo-router';
import React from 'react';

const NotAuthenticated = ({ children }: { children: React.ReactNode }) => {
  const { authChecked, user } = useUser();

  if (!authChecked) {
    return <AppLoader />
  }

  if (authChecked && user !== null) {
    return <Redirect href="/(dashboard)/profile" />
  }

  return <>{children}</>;
}

export default NotAuthenticated