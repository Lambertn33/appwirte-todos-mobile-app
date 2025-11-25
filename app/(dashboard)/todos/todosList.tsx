import AppLoader from '@/components/ui/AppLoader';
import { AppText } from '@/components/ui/AppText';
import { AppView } from '@/components/ui/AppView';
import { useTodos } from '@/hooks/useTodos';
import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

const TodosList = () => {
  const { todos, isGettingTodos } = useTodos();
  if (isGettingTodos) {
    return (
      <AppView className="flex-1 bg-blue-50">
        <AppLoader />
      </AppView>
    )
  }
  else {
    return (
      <FlatList
        data={todos}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.$id}
        ListEmptyComponent={() => (
          <AppView className="flex-1 bg-blue-50">
            <AppText>No todos found</AppText>
          </AppView>
        )}
      />
    ) 
  }
}

export default TodosList

const styles = StyleSheet.create({})