import { useUser } from "@/hooks/useUser";
import { databases } from "@/lib/appwrite";
import { ID } from "react-native-appwrite";


const E_COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;
const E_DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;


export class TodosService {
    static async createTodo(title: string, description: string): Promise<void> {
        const user = useUser();
        await databases.createDocument(E_DATABASE_ID, E_COLLECTION_ID, ID.unique(), { title, description });
    }
}