import { FC } from "react";
import { Outlet } from "react-router-dom";

const Access: FC = () => {
  return (
    <section>
      <Outlet />
    </section>
  );
};

export default Access;
