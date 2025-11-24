import { account } from "@/lib/appwrite";
import { ID } from "react-native-appwrite";

export interface User {
  id: string;
  name: string;
  email: string;
}

export class AuthService {

  static async login(email: string, password: string): Promise<User> {
    const trimmedEmail = email.trim();
    await account.createEmailPasswordSession(trimmedEmail, password);
    const user = await account.get();
    return {
      id: user.$id,
      name: user.name,
      email: user.email,
    };
  }

  static async register(name: string, email: string, password: string): Promise<User> {
    const userId = ID.unique();
    await account.create(userId, email, password, name);
    // Login will return the full user object with ID
    return await this.login(email, password);
  }

  static async logout(): Promise<void> {
    await account.deleteSession("current");
  }

  static async getCurrentUser(): Promise<User | null> {
    try {
      const user = await account.get();
      return {
        id: user.$id,
        name: user.name,
        email: user.email,
      };
    } catch (error) {
      return null;
    }
  }
}

