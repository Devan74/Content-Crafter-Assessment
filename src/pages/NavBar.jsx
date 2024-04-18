import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-end items-center p-4">
      <div className="flex items-center space-x-4">
        <div className="flex  gap-5">
          <Link to={"/upload-file"}>
            <button className="bg-black text-sm text-white rounded-3xl px-4 py-2">
              Upload
            </button>
          </Link>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for anything"
              className="bg-gray-100 px-4 py-2 rounded-3xl text-sm outline-none focus:border-blue-500 pl-10"
            />
            <CiSearch className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
