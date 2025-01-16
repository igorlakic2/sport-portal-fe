import { createContext, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState<boolean | null>(null);
  const isAuthenticated = !!token;

  const login = () => {
    setToken(true);
  };

  const logout = () => {
    setToken(null);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};
