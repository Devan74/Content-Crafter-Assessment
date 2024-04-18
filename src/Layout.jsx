import { Outlet, Navigate } from "react-router-dom";
import { NavBar, SideBar } from "./pages";

const Layout = () => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/Signin" />;

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-none">
        <SideBar />
      </div>
      <div className="flex flex-col flex-1">
        <nav className="flex-none">
          <NavBar />
        </nav>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="h-full flex items-center justify-center scrollbar-hide">
            <div className="w-full">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
