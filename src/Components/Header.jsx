import React from "react";
import { Navbar } from "flowbite-react";
import { FaHome, FaInfoCircle, FaServicestack, FaDollarSign, FaEnvelope } from "react-icons/fa";

export const Header = () => {
  return (
    <Navbar fluid rounded className="bg-white dark:bg-gray-800 shadow-lg">
      <Navbar.Brand href="#">
        <span className="self-center whitespace-nowrap text-2xl font-bold text-blue-600 dark:text-blue-400">
          Portofolio Ghatan
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Navbar.Link href="#" active className="flex items-center">
          <FaHome className="mr-2" />
          <span className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </span>
        </Navbar.Link>
        <Navbar.Link href="#about" className="flex items-center">
          <FaInfoCircle className="mr-2" />
          <span className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
            About
          </span>
        </Navbar.Link>
        <Navbar.Link href="#services" className="flex items-center">
          <FaServicestack className="mr-2" />
          <span className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
            Services
          </span>
        </Navbar.Link>
        <Navbar.Link href="#pricing" className="flex items-center">
          <FaDollarSign className="mr-2" />
          <span className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
            Pricing
          </span>
        </Navbar.Link>
        <Navbar.Link href="#contact" className="flex items-center">
          <FaEnvelope className="mr-2" />
          <span className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
            Contact
          </span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
