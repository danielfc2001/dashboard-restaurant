const useThemeSelector = () => {
  let remove: any = null;
  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

  const getThemePreference = () => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") ?? "system";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const updateIcon = (themePreference: string) => {
    const themeToggleIcon = document.querySelectorAll(".theme-toggle-icon");
    themeToggleIcon?.forEach((element: any) => {
      element.style.scale = element.id === themePreference ? "1" : "0";
    });
  };

  const updateTheme = () => {
    if (remove != null) {
      remove();
    }
    matchMedia.addEventListener("change", updateTheme);
    remove = () => {
      matchMedia.removeEventListener("change", updateTheme);
    };

    const themePreference = getThemePreference();
    const isDark =
      themePreference === "dark" ||
      (themePreference === "system" && matchMedia.matches);

    updateIcon(themePreference);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  };

  /*   document.addEventListener("click", () =>
    themesMenu?.classList.remove("open")
  ); */

  const handleClickThemesMenu = (e: any) => {
    e.stopPropagation();

    const themesMenu = document.getElementById("themes-menu");

    const isClosed = !themesMenu?.classList.contains("open");

    themesMenu?.classList[isClosed ? "add" : "remove"]("open");
  };

  const setLocalTheme = (e: any) => {
    console.log(e);
    localStorage.setItem("theme", e.target?.innerText?.toLowerCase().trim());

    updateTheme();
  };
  return {
    updateTheme,
    setLocalTheme,
    handleClickThemesMenu,
  };
};

export default useThemeSelector;
