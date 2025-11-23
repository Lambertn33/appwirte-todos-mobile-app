import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { AppView } from './AppView'

const AppLoader = () => {
  return (
    <AppView className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" color="#3b82f6" />
    </AppView>
  )
}

export default AppLoader

const styles = StyleSheet.create({})