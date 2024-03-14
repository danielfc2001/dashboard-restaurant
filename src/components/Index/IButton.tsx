import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type IButton = {
  title: string;
  to: string;
  children?: ReactNode;
};

const IButton: FC<IButton> = ({ title, to, children }) => {
  return (
    <Link
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      to={to}
    >
      <span className="relative flex flex-row justify-center items-center gap-2 px-10 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {children}
        {title}
      </span>
    </Link>
  );
};

export default IButton;
