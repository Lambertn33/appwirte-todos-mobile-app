import { AppButton } from '@/components/ui/AppButton';
import AppLoader from '@/components/ui/AppLoader';
import { AppText } from '@/components/ui/AppText';
import { AppView } from '@/components/ui/AppView';
import { useTodos } from '@/hooks/useTodos';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Todo {
  $id: string;
  title: string;
  description: string;
  $createdAt: string;
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const TodoDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { getTodo } = useTodos();
  const [todo, setTodo] = useState<Todo | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTodo = async () => {
      if (!id || typeof id !== 'string') return;
      setIsLoading(true);
      try {
        const todoResponse = await getTodo(id);
        setTodo(todoResponse as Todo);
      } catch (error) {
        setTodo(null);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodo();
  }, [id, getTodo]);

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-blue-50" edges={['top', 'bottom']}>
        <AppLoader />
      </SafeAreaView>
    );
  }

  if (!todo) {
    return (
      <SafeAreaView className="flex-1 bg-blue-50 items-center justify-center px-6" edges={['top', 'bottom']}>
        <AppText className="text-2xl font-semibold text-gray-900 mb-3">
          Todo not found
        </AppText>
        <AppText className="text-gray-600 text-center mb-6">
          We couldn’t find the todo you’re looking for. It may have been removed or the link is invalid.
        </AppText>
        <AppButton
          className="bg-blue-600 px-8 py-4 rounded-full shadow-lg active:bg-blue-700"
          onPress={() => router.back()}
        >
          <AppText className="text-white font-semibold text-lg">Go Back</AppText>
        </AppButton>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-blue-50" edges={['top', 'bottom']}>
      <AppView className="flex-1 px-6 pt-8">
        <AppButton className="bg-transparent mb-6" onPress={() => router.back()}>
          <AppText className="text-blue-600 font-semibold">{'← Back to Todos'}</AppText>
        </AppButton>

        <AppView className="bg-white rounded-3xl p-6 shadow-lg mb-6">
          <AppText className="text-3xl font-bold text-gray-900 mb-2">{todo.title}</AppText>
          <AppText className="text-sm text-gray-500 mb-6">
            Created on {formatDate(todo.$createdAt)}
          </AppText>

          <AppView className="bg-blue-50 rounded-2xl p-4 mb-6">
            <AppText className="text-base text-gray-700 leading-7">
              {todo.description || 'No description provided for this task.'}
            </AppText>
          </AppView>

          <AppView className="flex-row gap-4">
            <AppButton className="flex-1 bg-red-50 px-6 py-4 rounded-2xl shadow-md active:bg-red-100">
              <AppText className="text-red-500 text-center font-semibold">Delete</AppText>
            </AppButton>
          </AppView>
        </AppView>
      </AppView>
    </SafeAreaView>
  );
};

export default TodoDetails

const styles = StyleSheet.create({})