import { FC, ReactNode, createContext, useState } from "react";

type Auth = {
  isAuthenticated: boolean;
};

const AuthContext = createContext<Auth | null>(null);

interface Props {
  children: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
