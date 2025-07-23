import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div id="main-container">
      <Outlet />
    </div>
  );
};

export default MainLayout;
