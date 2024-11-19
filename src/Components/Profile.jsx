import React, { useState } from "react";
import { Card, Modal, Button } from "flowbite-react";
import { FaPhoneAlt, FaEnvelope, FaGithub } from "react-icons/fa";
import Image from "../assets/ghatan.jpeg";

export const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
 
      <Card className="max-w-md mx-auto my-6 shadow-lg rounded-lg bg-white dark:bg-gray-800">
        <div className="flex flex-col items-center pt-6">
          <img
            alt="Photo Profile"
            src={Image}
            className="rounded-full shadow-lg w-32 h-32 mb-4 border-4 border-blue-500 cursor-pointer"
            onClick={() => setIsModalOpen(true)} 
          />
          <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
            Muhammad Farrel Ghatan Nugraha
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Frontend Developer
          </span>
        </div>

        <hr className="my-4 border-gray-300 dark:border-gray-700" />

        <div className="px-6 space-y-4">
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-blue-500" />
             <a
              href="https:wa.me/ +62 838 2269 4932"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline"
            >
              +62 838 2269 4932
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-red-500" />
            <a
              href="https:nugrahaghatan45@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline"
            >
              nugrahaghatan45@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <FaGithub className="text-gray-700 dark:text-white" />
            <a
              href="https://github.com/GhatanFarrel27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline"
            >
              github.com/GhatanFarrel27
            </a>
          </div>
        </div>

        <hr className="my-4 border-gray-300 dark:border-gray-700" />

         <div className="px-6 pb-6">
          <h5 className="text-lg font-bold text-gray-900 dark:text-white">
            Pendidikan
          </h5>
          <ul className="list-disc pl-6 mt-2 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <strong>SMK PRAKARYA INTERNASIONA</strong> Pengembangan Perangkat Lunak Dan Gim (2023 - 2026)
            </li>
          </ul>
        </div>

        <div className="px-6 pb-6">
          <h5 className="text-lg font-bold text-gray-900 dark:text-white">
            About Me
          </h5>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Saya seorang Pengembang Frontend yang bersemangat dengan latar
            belakang yang kuat dalam membangun aplikasi web yang responsif dan
            interaktif. Terampil dalam React.js, Tailwind CSS, dan kerangka
            kerja JavaScript modern.
          </p>
        </div>
      </Card>

      <Modal
        show={isModalOpen}
        size="lg"
        popup
        onClose={() => setIsModalOpen(false)} 
      >
        <Modal.Header />
        <Modal.Body>
          <div className="flex justify-center">
            <img src={Image} alt="Photo Profile" className="rounded-lg shadow-lg" />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Profile;
