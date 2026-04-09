import React, { useState } from "react";
import { Card, Modal, Button } from "flowbite-react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import Image from "../assets/ghatan.jpeg";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800">
            {/* Top Banner */}
            <div className="relative h-32 md:h-40 bg-gray-100 dark:bg-gray-700">
            </div>

            {/* Profile Main */}
            <div className="relative px-6 md:px-10 pb-10">
              {/* Profile image overlapping banner */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 md:-mt-20">
                <div className="flex flex-col md:flex-row md:items-end gap-5">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group relative"
                  >
                    <img
                      src={Image}
                      alt="Photo Profile"
                      className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover border-4 border-white dark:border-gray-800 shadow-md transition duration-300 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 rounded-lg bg-black/0 group-hover:bg-black/10 transition"></span>
                  </button>

                  <div className="mt-4 md:mt-0">
                    <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Muhammad Farrel Ghatan Nugraha
                    </h1>
                    <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                      Frontend Developer
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <FaMapMarkerAlt className="text-gray-500" />
                      <span>Indonesia</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-6 md:mt-0 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/GhatanFarrel27"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="rounded-lg bg-gray-900 hover:bg-gray-800 text-white">
                      View GitHub
                    </Button>
                  </a>
                  <a href="mailto:nugrahaghatan45@gmail.com">
                    <Button color="light" className="rounded-lg border border-gray-300">
                      Contact Me
                    </Button>
                  </a>
                </div>
              </div>

              {/* About + Info Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                {/* Left: About */}
                <div className="space-y-6">
                  <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      About Me
                    </h2>
                    <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                      Saya seorang <strong>Frontend Developer</strong> yang
                      bersemangat dalam membangun website yang modern,
                      responsif, dan interaktif. Saya memiliki minat kuat pada
                      pengembangan antarmuka pengguna dengan pengalaman
                      menggunakan <strong>React.js</strong>,{" "}
                      <strong>Tailwind CSS</strong>, dan teknologi JavaScript
                      modern untuk menciptakan pengalaman pengguna yang nyaman
                      dan menarik.
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Tech Stack
                    </h2>

                    <div className="flex flex-wrap gap-3">
                      <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium">
                        <FaReact />
                        React.js
                      </span>

                      <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium">
                        <SiTailwindcss />
                        Tailwind CSS
                      </span>

                      <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium">
                        <SiJavascript />
                        JavaScript
                      </span>

                      <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium">
                        <SiHtml5 />
                        HTML
                      </span>

                      <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium">
                        <SiCss3 />
                        CSS
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Contact + Education */}
                <div className="space-y-6">
                  {/* Contact */}
                  <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-6 shadow-lg">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <FaPhoneAlt className="text-blue-600 dark:text-blue-400" />
                      Contact
                    </h2>

                    <div className="space-y-4">
                      <a
                        href="https://wa.me/6283822694932"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 hover:from-green-200 hover:to-green-300 dark:hover:from-green-800 dark:hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                      >
                        <div className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                          <FaPhoneAlt className="text-green-600 dark:text-green-400 text-lg" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-green-700 dark:text-green-300 font-semibold uppercase tracking-wide">
                            WhatsApp
                          </p>
                          <p className="text-sm font-bold text-gray-800 dark:text-white">
                            +62 838 2269 4932
                          </p>
                        </div>
                        <div className="text-green-600 dark:text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          →
                        </div>
                      </a>

                      <a
                        href="mailto:nugrahaghatan45@gmail.com"
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 hover:from-blue-200 hover:to-blue-300 dark:hover:from-blue-800 dark:hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                      >
                        <div className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                          <FaEnvelope className="text-blue-600 dark:text-blue-400 text-lg" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-blue-700 dark:text-blue-300 font-semibold uppercase tracking-wide">
                            Email
                          </p>
                          <p className="text-sm font-bold text-gray-800 dark:text-white break-all">
                            nugrahaghatan45@gmail.com
                          </p>
                        </div>
                        <div className="text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          →
                        </div>
                      </a>

                      <a
                        href="https://github.com/GhatanFarrel27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                      >
                        <div className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                          <FaGithub className="text-gray-800 dark:text-gray-200 text-lg" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-700 dark:text-gray-300 font-semibold uppercase tracking-wide">
                            GitHub
                          </p>
                          <p className="text-sm font-bold text-gray-800 dark:text-white">
                            github.com/GhatanFarrel27
                          </p>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          →
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Education
                    </h2>
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                      <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                        SMK PRAKARYA INTERNASIONAL
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Pengembangan Perangkat Lunak dan Gim
                      </p>
                      <p className="text-xs text-gray-400 mt-2">2023 - 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Image Modal */}
      <Modal
        show={isModalOpen}
        size="4xl"
        popup
        onClose={() => setIsModalOpen(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="flex justify-center p-2">
            <img
              src={Image}
              alt="Photo Profile"
              className="rounded-lg shadow-md max-h-[75vh] object-contain"
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Profile;
