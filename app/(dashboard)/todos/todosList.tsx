import { TodoItem } from '@/components/todos/TodoItem';
import AppLoader from '@/components/ui/AppLoader';
import { AppText } from '@/components/ui/AppText';
import { AppView } from '@/components/ui/AppView';
import { useTodos } from '@/hooks/useTodos';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TodosList = () => {
  const { todos, isGettingTodos } = useTodos();
  if (isGettingTodos) {
    return (
      <SafeAreaView className="flex-1 bg-blue-50" edges={['top', 'bottom']}>
        <AppView className="flex-1 justify-center items-center">
          <AppLoader />
        </AppView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-blue-50" edges={['top', 'bottom']}>
      <AppView className="flex-1 pt-8">
        <AppText className="text-3xl font-bold text-gray-900 px-6 mb-2">
          Your Todos
        </AppText>
        <AppText className="text-gray-600 px-6 mb-6">
          Stay on top of your tasks and keep your productivity high.
        </AppText>
        <FlatList
          data={todos}
          renderItem={({ item }) => <TodoItem todo={item} />}
          keyExtractor={(item) => item.$id}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <AppView className="h-6" />}
          ListEmptyComponent={() => (
            <AppView className="items-center justify-center py-16 px-6">
              <AppText className="text-xl font-semibold text-gray-900 mb-2">
                No todos yet
              </AppText>
              <AppText className="text-gray-600 text-center">
                Create your first todo to start organizing your tasks.
              </AppText>
            </AppView>
          )}
        />
      </AppView>
    </SafeAreaView>
  );
}

export default TodosList

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
});