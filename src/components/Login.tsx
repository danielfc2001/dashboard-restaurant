import { FC } from "react";
import LoginForm from "./Access/LoginForm";

const Login: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-svh text-white/5 dark:text-white">
      <LoginForm />
    </div>
  );
};

export default Login;
