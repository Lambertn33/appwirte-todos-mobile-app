import NotAuthenticated from "@/components/auth/NotAuthenticated";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function AuthLayout() {
  return (
    <NotAuthenticated>
      <Tabs
          screenOptions={{
            tabBarButton: (props) => {
              const isActive = props.accessibilityState?.selected;

              return (
                <TouchableOpacity
                  {...(props as any)}
                  style={[
                    {
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                    isActive && {
                      backgroundColor: '#3b82f6',
                      borderRadius: 8,
                    },
                  ]}
                />
              );
            },
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '700',
            },
            tabBarItemStyle: {
              justifyContent: 'center',
              alignItems: 'center',
              height: 70,
              flex: 1,
            },
          }}
        > 
        <Tabs.Screen name="login" options={{ title: "Login", 
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="login" color={color} size={28} />
          ),
        }} />
        <Tabs.Screen name="register" options={{ title: "Register",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person-add" color={color} size={28} />
          ),
        }} />
      </Tabs>
    </NotAuthenticated>
  );
}