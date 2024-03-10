import { useEffect } from "react";
import useThemeSelector from "../hooks/useThemeSelector";

const THEMES = ["Light", "Dark", "System"];

const ThemeSelector = () => {
  const { setLocalTheme, handleClickThemesMenu, updateTheme } =
    useThemeSelector();

  useEffect(() => {
    updateTheme();
  }, []);

  return (
    <div className="relative ml-1 mr-1">
      <button
        id="theme-toggle-btn"
        className="appearance-none border-none flex hover:scale-125 transition"
        onClick={handleClickThemesMenu}
      >
        <span className="sr-only">Elige el tema</span>
        <svg
          id="light"
          className="text-slate-700 dark:text-white theme-toggle-icon size-5 transition-all"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
        </svg>
        <svg
          id="dark"
          className="text-slate-700 dark:text-white theme-toggle-icon absolute size-5 transition-all"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
        </svg>

        <svg
          id="system"
          className="text-slate-700 dark:text-white theme-toggle-icon absolute size-5 transition-all"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path>
          <path d="M7 20h10"></path>
          <path d="M9 16v4"></path>
          <path d="M15 16v4"></path>
        </svg>
      </button>
      <div
        id="themes-menu"
        className="absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md"
      >
        <ul>
          {THEMES.map((theme) => (
            <li
              key={theme}
              className="themes-menu-option text-slate-700 dark:text-white px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
              onClick={setLocalTheme}
            >
              {theme}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThemeSelector;
