import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FormValues } from "../components/Access/types";
import { loginUser } from "../services/auth";

export type Auth = {
  isAuthenticated: boolean;
  authErrors: AuthErrorsTypes;
  handleLoginUser: (data: FormValues) => void;
};

type ResponseDataTypes = {
  user: {
    id: string;
    username: string;
    role: string;
    token: string;
  };
  message: string;
};

type AuthErrorsTypes = {
  status: boolean;
  type: string | null;
  message: string | null;
};

export const AuthContext = createContext<Auth | null>(null);

interface Props {
  children: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();
  const [authErrors, setAuthErrors] = useState<AuthErrorsTypes>({
    status: false,
    type: null,
    message: null,
  });

  const handleLoginUser = async (data: FormValues) => {
    try {
      const responseData: ResponseDataTypes = await loginUser(data);
      if (responseData) {
        console.log(responseData);
        setIsAuthenticated(true);
        localStorage.setItem("auth_token", responseData.user.token);
        navigate("/dashboard");
      }
    } catch (err: any) {
      console.log(err);
      setAuthErrors({
        status: true,
        type: "failed",
        message: err.message,
      });
    }
  };

  useEffect(() => {
    if (authErrors.status) {
      const timer = setTimeout(() => {
        setAuthErrors({
          status: false,
          type: null,
          message: null,
        });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [authErrors]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, authErrors, handleLoginUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
