import { createContext, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const isAuthenticated = localStorage.getItem("loggedIn") === "true" || loggedIn;

  const login = (token: string) => {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("token", token);
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};
