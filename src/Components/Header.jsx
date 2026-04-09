import React from "react";
import { Navbar } from "flowbite-react";
import { FaCode } from "react-icons/fa";

export const Header = () => {
  return (
    <Navbar fluid rounded className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-800 dark:via-purple-800 dark:to-indigo-800 shadow-xl border-b border-gray-200 dark:border-gray-700">
      <Navbar.Brand href="#" className="flex items-center space-x-3">
        <div className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
          <FaCode className="text-blue-600 dark:text-blue-400 text-xl" />
        </div>
        <span className="self-center whitespace-nowrap text-2xl font-bold text-white dark:text-white drop-shadow-lg">
          Portofolio Ghatan
        </span>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
