import { AuthService, User } from "@/lib/auth";
import { createContext, useEffect, useState } from "react";

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

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const authenticatedUser = await AuthService.login(email, password);
      setUser(authenticatedUser);
    } catch (error) {
      throw Error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      const newUser = await AuthService.register(name, email, password);
      setUser(newUser);
    } catch (error) {
      throw Error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await AuthService.logout();
      setUser(null);
    } catch (error) {
      throw Error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const getInitialUser = async () => {
    try {
      const currentUser = await AuthService.getCurrentUser();
      console.log("currentUser", currentUser);
      setUser(currentUser);
    } catch (error) {
      setUser(null);
    } finally {
      setAuthChecked(true);
    }
  };

  useEffect(() => {
    getInitialUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, login, register, logout, authChecked, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};