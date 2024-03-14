import { FC } from "react";
import { NavLink } from "react-router-dom";

type SidebarButton = {
  name: string;
  to: string;
};

const SidebarButton: FC<SidebarButton> = ({ name, to }) => {
  return (
    <li>
      <NavLink
        to={to}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <span className="ms-3">{name}</span>
      </NavLink>
    </li>
  );
};

export default SidebarButton;
