import React from 'react';

const Home = () => {
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-4xl font-bold  mb-8">Welcome to Content Crafter</h1>
        <p className="text-lg  mb-8">Create stunning web pages effortlessly!</p>
        <button className="bg-white text-gray-500 px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-gray-400 hover:text-white transition duration-300">Get Started</button>
      </div>
    </div>
  );
}

export default Home;
