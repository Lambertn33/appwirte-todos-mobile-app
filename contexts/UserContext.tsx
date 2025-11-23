import { account } from "@/lib/appwrite";
import { createContext, useEffect, useState } from "react";
import { ID } from "react-native-appwrite";

interface User {
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  authChecked: boolean;
  isLoading: boolean;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  authChecked: false,
  isLoading: false,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function login(email: string, password: string) {
    setIsLoading(true);
    try {
      const trimmedEmail = email.trim();
      await account.createEmailPasswordSession(trimmedEmail, password);
      setUser(await account.get());
    } catch (error) {
      throw Error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  async function register(name: string, email: string, password: string) {
    setIsLoading(true);
    try {
       await account.create(ID.unique(), email, password, name);
       await login(email, password);
       setUser({ name, email });
    } catch (error) {
      setIsLoading(false);
      throw Error((error as Error).message);
    }
  };

  async function logout() {
    setIsLoading(true);
    await account.deleteSession("current");
    setUser(null);
    setIsLoading(false);
  };

  async function getInitialUser() {
    try {
      const user = await account.get();
      setUser(user);
    } catch (error) {
      setUser(null);
    } finally {
      setAuthChecked(true);
    }
  }

  useEffect(() => {
    getInitialUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, login, register, logout, authChecked, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};