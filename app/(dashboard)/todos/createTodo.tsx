import { AppButton, AppText, AppTextInput, AppView } from "@/components/ui";
import { useTodos } from "@/hooks/useTodos";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateTodo = () => {
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
  });

  const { addTodo } = useTodos();

  const handleSubmit = async() => {
    await addTodo(todoData);
  };

  return (
    <SafeAreaView className="flex-1 bg-blue-50" edges={["top", "bottom"]}>
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        <AppView className="flex-1 px-6 pt-8">
          {/* Header Section */}
          <AppView className="items-center mb-8">
            <AppView className="w-20 h-20 bg-blue-600 rounded-full items-center justify-center mb-4 shadow-lg">
              <MaterialIcons name="add-task" size={48} color="#ffffff" />
            </AppView>
            <AppText className="text-4xl font-bold text-gray-900 mb-2 text-center">
              Create Todo
            </AppText>
            <AppText className="text-lg text-gray-600 text-center">
              Add a new task to your list
            </AppText>
          </AppView>

          {/* Form Card */}
          <AppView 
            className="bg-white rounded-xl p-6 mb-6"
            style={styles.formContainer}
          >
            <AppTextInput
              label="Title"
              placeholder="Enter todo title"
              value={todoData.title}
              onChangeText={(text) => setTodoData({ ...todoData, title: text })}
              autoCapitalize="sentences"
              showSoftInputOnFocus={true}
              textInputClassName="w-full h-14 rounded-full border border-gray-300 px-4 py-2 bg-white"
            />

            <AppTextInput
              label="Description"
              placeholder="Enter todo description (optional)"
              value={todoData.description}
              onChangeText={(text) => setTodoData({ ...todoData, description: text })}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              autoCapitalize="sentences"
              showSoftInputOnFocus={true}
              textInputClassName="w-full min-h-32 rounded-2xl border border-gray-300 px-4 py-3 bg-white"
            />

            <AppButton
              onPress={handleSubmit}
              className="bg-blue-600 px-8 py-4 rounded-full shadow-lg active:bg-blue-700 mt-4"
            >
              <AppView className="flex-row items-center justify-center">
                <MaterialIcons name="check-circle" size={24} color="#ffffff" />
                <AppText className="text-white text-lg font-semibold ml-2">
                  Create Todo
                </AppText>
              </AppView>
            </AppButton>
          </AppView>

          {/* Info Section */}
          <AppView className="bg-blue-100 rounded-xl p-4 mb-6">
            <AppView className="flex-row items-start">
              <MaterialIcons name="info" size={24} color="#3b82f6" />
              <AppView className="flex-1 ml-3">
                <AppText className="text-blue-900 font-semibold text-base mb-1">
                  Tips for creating todos
                </AppText>
                <AppText className="text-blue-700 text-sm leading-5">
                  • Keep titles short and clear{"\n"}
                  • Add detailed descriptions for complex tasks{"\n"}
                  • You can edit or delete todos later
                </AppText>
              </AppView>
            </AppView>
          </AppView>
        </AppView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateTodo;

const styles = StyleSheet.create({
  formContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});