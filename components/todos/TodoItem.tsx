import { AppText } from "@/components/ui/AppText";
import { AppView } from "@/components/ui/AppView";
import { MaterialIcons } from "@expo/vector-icons";

interface TodoItemProps {
  todo: {
    $id: string;
    title: string;
    description: string;
    $createdAt: string;
  };
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <AppView className="bg-white rounded-2xl p-4 shadow-md border border-blue-50">
      <AppView className="flex-row items-start justify-between mb-3">
        <AppView className="flex-row items-center">
          <AppView className="w-12 h-12 rounded-full bg-blue-100 items-center justify-center mr-3">
            <MaterialIcons name="check-circle" size={28} color="#2563eb" />
          </AppView>
          <AppView>
            <AppText className="text-lg font-semibold text-gray-900" numberOfLines={1}>
              {todo.title}
            </AppText>
            <AppText className="text-xs text-gray-500">
              Created on {formatDate(todo.$createdAt)}
            </AppText>
          </AppView>
        </AppView>
      </AppView>

      <AppText className="text-gray-600 leading-6">
        {todo.description || "No description provided for this task."}
      </AppText>
    </AppView>
  );
};