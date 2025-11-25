import { databases } from "./appwrite";

import { ID, Permission, Query, Role } from "react-native-appwrite";

const E_COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION!;
const E_DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE!;

export class TodosService {
    static async createTodo(userId: string, title: string, description: string): Promise<void> {        
        await databases.createDocument(
            E_DATABASE_ID, 
            E_COLLECTION_ID,
            ID.unique(), 
            { title, description, user_id: userId },
            [
                Permission.read(Role.user(userId)),
                Permission.write(Role.user(userId)),
                Permission.delete(Role.user(userId)),
                Permission.update(Role.user(userId)),
            ]
        );
    }

    static async getTodos(userId: string) {
        const response = await databases.listDocuments(
            E_DATABASE_ID,
            E_COLLECTION_ID,
            [Query.equal("user_id", userId)]
        );
        return response.documents;
    }

    static async getTodo(id: string) {
        const response = await databases.getDocument(
            E_DATABASE_ID,
            E_COLLECTION_ID,
            id
        );
        return response;
    }
}