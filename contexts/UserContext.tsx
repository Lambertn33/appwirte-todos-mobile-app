import { createContext, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  login: async () => {},
  register: async () => {},
  logout: async () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  async function login(email: string, password: string) {};

  async function register(name: string, email: string, password: string) {};

  async function logout() {};

  return (
    <UserContext.Provider value={{ user, setUser, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};