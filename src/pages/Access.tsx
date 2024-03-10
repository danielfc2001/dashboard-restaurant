import { FC } from "react";
import { Outlet } from "react-router-dom";

const Access: FC = () => {
  return (
    <section>
      <h1>Bi</h1>
      <Outlet />
    </section>
  );
};

export default Access;
