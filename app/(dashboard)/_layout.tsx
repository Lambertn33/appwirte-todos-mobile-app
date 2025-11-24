import Authenticated from '@/components/auth/Authenticated';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const DashboardLayout = () => {
  return (
    <Authenticated>
        <Tabs>
           <Tabs.Screen name="todos/todosList" options={{ title: "Todos List", tabBarIcon: ({ color }) => (
              <MaterialIcons name="list" color={color} size={28} />
           ) }} />
            <Tabs.Screen name="todos/createTodo" options={{ title: "Create Todo", tabBarIcon: ({ color }) => (
               <MaterialIcons name="add" color={color} size={28} />
            ) }} />
             <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: ({ color }) => (
                <MaterialIcons name="person" color={color} size={28} />
             ) }} />
        </Tabs>
    </Authenticated>
  )
}

export default DashboardLayout