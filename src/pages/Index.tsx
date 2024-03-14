import { FC } from "react";
import IButton from "../components/Index/IButton";
import { Link } from "react-router-dom";

const Index: FC = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full h-svh px-12">
      <h1 className="font-semibold text-4xl text-gray-800 dark:text-gray-200 border-b pb-2">
        Bienvenido al Panel de control de ...
      </h1>
      <div className="flex flex-row justify-between items-center gap-36 py-10">
        <IButton title="Iniciar Secion" to="/access/login">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
            <path d="M3 12h13l-3 -3" />
            <path d="M13 15l3 -3" />
          </svg>
        </IButton>
        <span className="border-b border-gray-700 dark:border-gray-300 text-gray-700 dark:text-gray-300">
          or
        </span>
        <IButton title="Ir al Sitio" to="/">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
          </svg>
        </IButton>
      </div>
      <p className="text-xs text-wrap text-gray-700 dark:text-gray-300">
        En caso de poseer privilegios administrativos y tener problemas para
        acceder al servicio, por favor contactar con el{" "}
        <Link
          className="hover:text-gray-800 hover:dark:text-gray-400 transition-all"
          to={"/"}
        >
          equipo de mantenimiento
        </Link>
        .
      </p>
    </section>
  );
};

export default Index;
