import React from "react";
import ProfileImgage from "../assets/profile.png";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const navigation = [
    { name: "Templates", href: "/templates" },
    { name: "Pages", href: "/pages" },
    { name: "Settings", href: "/settings" },
  ];

  const user = {
    name: "Abhimanyu",
    role: "Product Designer",
    profileImageUrl: ProfileImgage,
  };

  const location = useLocation();

  return (
    <>
      <div className="hidden md:flex flex-col h-screen w-48 bg-gray-900 text-center">
        <div className="py-10">
          <span className="text-white">Logo</span>
        </div>

        <nav className="flex-1 mt-[4rem]">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`block px-4 py-2 mx-10 text-sm rounded-3xl ${
                    location.pathname === item.href
                      ? "text-white bg-lime-500"
                      : "text-gray-300 hover:text-white hover:bg-lime-500"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-center m-5 py-4 bg-lime-500 rounded-md">
          <img
            className="h-16 w-16 relative top-[-3rem] left-0 rounded-full"
            src={user.profileImageUrl}
            alt="User Profile"
          />
          <div className="text-white text-center space-y-5">
            <div className="space-y-1">
              <p className="font-semibold">{user.name}</p>
              <p className="text-xs text-gray-200">{user.role}</p>
            </div>
            <p className="text-xs text-gray-100 cursor-pointer">Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
