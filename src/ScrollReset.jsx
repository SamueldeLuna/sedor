// React
import { Outlet, ScrollRestoration } from "react-router-dom";

const ScrollReset = () => {
  return (
    <div>
      <Outlet />
      <ScrollRestoration />
    </div>
  );
};

export default ScrollReset;
