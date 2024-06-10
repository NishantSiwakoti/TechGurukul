import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Main flex container */}
        <div className="flex w-full justify-between items-center">
          {/* Centered text */}
          <div className="text-center text-sm mx-auto">
            © 2024 TechGurukul. All rights reserved.
          </div>

          {/* Social icons */}
          <div className="flex space-x-4">
            <a
              href="/"
              aria-label="Facebook"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-0.73 0-1.325 0.595-1.325 1.325v21.35c0 0.73 0.595 1.325 1.325 1.325h11.494v-9.294h-3.125v-3.622h3.125v-2.671c0-3.1 1.891-4.787 4.65-4.787 1.325 0 2.463 0.099 2.794 0.143v3.24l-1.919 0.001c-1.504 0-1.794 0.714-1.794 1.761v2.313h3.587l-0.467 3.622h-3.12v9.294h6.116c0.73 0 1.325-0.595 1.325-1.325v-21.35c0-0.73-0.595-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a
              href="/"
              aria-label="Twitter"
              className="hover:text-blue-400 dark:hover:text-blue-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-0.885 0.391-1.83 0.656-2.825 0.775 1.014-0.608 1.793-1.57 2.163-2.719-0.951 0.564-2.005 0.974-3.127 1.195-0.897-0.957-2.178-1.554-3.594-1.554-2.723 0-4.927 2.204-4.927 4.927 0 0.386 0.044 0.762 0.128 1.124-4.094-0.206-7.725-2.167-10.157-5.146-0.424 0.729-0.668 1.577-0.668 2.483 0 1.71 0.871 3.213 2.192 4.096-0.807-0.025-1.566-0.247-2.228-0.616v0.061c0 2.386 1.696 4.374 3.946 4.829-0.413 0.112-0.848 0.171-1.296 0.171-0.317 0-0.626-0.031-0.927-0.089 0.627 1.956 2.445 3.379 4.6 3.419-1.685 1.32-3.809 2.107-6.115 2.107-0.397 0-0.789-0.023-1.177-0.069 2.179 1.396 4.768 2.211 7.548 2.211 9.055 0 14.009-7.503 14.009-14.009 0-0.213-0.005-0.425-0.015-0.636 0.962-0.694 1.798-1.562 2.457-2.548l-0.047-0.02z" />
              </svg>
            </a>
            <a
              href="/"
              aria-label="LinkedIn"
              className="hover:text-blue-500 dark:hover:text-blue-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zM8 19h-3v-10h3v10zM6.5 7.5c-0.966 0-1.75-0.784-1.75-1.75s0.784-1.75 1.75-1.75 1.75 0.784 1.75 1.75-0.784 1.75-1.75 1.75zM20 19h-3v-5.554c0-1.325-0.019-3.032-1.85-3.032-1.851 0-2.137 1.447-2.137 2.941v5.645h-3v-10h2.872v1.365h0.041c0.4-0.758 1.376-1.555 2.835-1.555 3.032 0 3.59 1.994 3.59 4.586v5.604z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
