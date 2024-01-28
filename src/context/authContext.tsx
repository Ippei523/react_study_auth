// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  missToken: boolean;
  setMissToken: React.Dispatch<React.SetStateAction<boolean>>;
  login: (token: string) => void;
  logout: () => void;
};

interface AuthProviderProps {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {},
  missToken: false,
  setMissToken: () => {},
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<null | string>(null);
  const [missToken, setMissToken] = useState<boolean>(false);

  const login = (token: string) => {
    setToken(token);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{
      token,
      setToken,
      login,
      logout,
      missToken,
      setMissToken
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
