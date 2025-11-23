import { useUser } from '@/hooks/useUser';
import { Redirect } from 'expo-router';
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

const Authenticated = ({ children }: { children: React.ReactNode }) => {
  const { authChecked, user } = useUser();

  if (authChecked && user === null) {
    return <Redirect href="/login" />
  }

 if (!authChecked || !user) {
    return <ActivityIndicator size="large" color="#3b82f6" />
 }

 return children;
}

export default Authenticated

const styles = StyleSheet.create({})