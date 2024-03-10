import { FC } from "react";
import { type TopNavTypes } from "./types";

const TopNav: FC<TopNavTypes> = ({ children }) => {
  return (
    <nav className="fixed top-4 end-6 w-fit rounded-full py-2 px-3 bg-white/45 border border-white/35 dark:bg-white/15 dark:border-white/10">
      {children}
    </nav>
  );
};

export default TopNav;
