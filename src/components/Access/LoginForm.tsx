import { FC, useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormField from "./FormField";
import FormSubmit from "./FormSubmit";
import { FormValues } from "./types";
import { Auth, AuthContext } from "../../context/AuthContext";

const LoginForm: FC = () => {
  const methods = useForm<FormValues>();
  const { handleLoginUser } = useContext(AuthContext) as Auth;

  const submitForm = (data: FormValues) => {
    handleLoginUser(data);
  };
  return (
    <FormProvider {...methods}>
      <a
        href="/"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"> */}
        Naranjitos Dashboard
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={methods.handleSubmit(submitForm)}
          >
            <FormField
              title="Your Email"
              htmlFor="email"
              inputName="email"
              type="email"
              placeholder="name@company.com"
            />
            <FormField
              title="Your Password"
              htmlFor="password"
              inputName="password"
              type="password"
              placeholder="••••••"
            />
            {methods.formState.errors.password?.message && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                {methods.formState.errors.password?.message}
              </p>
            )}
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <FormSubmit title="Sign In" />
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default LoginForm;
