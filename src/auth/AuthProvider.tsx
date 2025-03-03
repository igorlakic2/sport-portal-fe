import { createContext, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const isAuthenticated = localStorage.getItem("loggedIn") === "true" || loggedIn;

  const login = () => {
    localStorage.setItem("loggedIn", "true");
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};
