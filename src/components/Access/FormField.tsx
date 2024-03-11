import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { FormFieldTypes } from "./types";

const FormField: FC<FormFieldTypes> = ({
  title,
  htmlFor,
  type,
  inputName,
  placeholder,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <input
        id={htmlFor}
        type={type}
        className={
          errors[inputName]?.message
            ? `bg-red-50 outline-none border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500 dark:focus:text-red-500 dark:focus:placeholder-red-500 dark:focus:border-red-500 transition-all`
            : `bg-gray-50 outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
        }
        placeholder={placeholder}
        required={true}
        {...register(inputName, {
          required: {
            value: true,
            message: "This field must be required.",
          },

          minLength:
            inputName === "password"
              ? {
                  value: 5,
                  message: "This field must be more than 5 characters.",
                }
              : {
                  value: 3,
                  message: "This field must be more than 3 characters.",
                },
        })}
      />
    </div>
  );
};

export default FormField;
