import { FC } from "react";
import ReactDOM from "react-dom";

type ToastTypes = {
  message: string | null;
  type: string | null;
};

export default function ToastPortal({
  message,
  type,
}: {
  message: string | null;
  type: string | null;
}) {
  const container: HTMLElement = document.getElementById("toastContainer")!;
  return ReactDOM.createPortal(
    <Toast message={message} type={type} />,
    container
  );
}

export const Toast: FC<ToastTypes> = ({ message, type }) => {
  return (
    <div
      id="toastMessages"
      className="fixed flex flex-col items-start w-full max-w-xs p-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 messages-toast"
      role="alert"
    >
      <svg
        className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
        width={20}
        height={20}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {type === "failed" ? (
          <>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              color="#cf0202"
              d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
            />
            <path color="#cf0202" d="M9 12l2 2l4 -4" />
          </>
        ) : (
          <>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              color="#02b00a"
              d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
            />
            <path color="#02b00a" d="M12 9v4" />
            <path color="#02b00a" d="M12 16v.01" />
          </>
        )}
      </svg>
      <div
        className={`text-sm font-normal ${
          type === "failed" ? `text-red-600` : `text-green-600`
        }`}
      >
        {message}
      </div>
    </div>
  );
};
