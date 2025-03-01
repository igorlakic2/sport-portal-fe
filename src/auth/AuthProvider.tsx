import { createContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: any) => {
  const isAuthenticated = localStorage.getItem("loggedIn") === "true";

  const login = () => {
    localStorage.setItem("loggedIn", "true");
  };

  const logout = () => {
    localStorage.removeItem("loggedIn");
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};
