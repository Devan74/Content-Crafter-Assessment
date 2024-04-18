import React from "react";
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Oops!</h1>
      <p className="text-lg text-gray-600 mb-4">404 - Page Not Found</p>
      <img
        src="https://static.vecteezy.com/system/resources/previews/005/084/699/non_2x/internet-network-warning-404-error-page-or-file-not-found-for-web-page-internet-error-page-or-issue-not-found-on-network-free-vector.jpg"
        alt="404 Image"
        className="w-[40vw] h-[50vh] mb-8"
      />
      <p className="text-lg text-gray-600 mb-8">
        Sorry, the page you are looking for could not be found.
      </p>
      <Link to={"/"}>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-600">
          <span>Return Home</span>
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
