import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-amber-700 to-black text-white py-4 px-6 flex flex-col sm:flex-row justify-between items-center">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-amber-300">Chai UI</span> — Made with ❤️
      </p>
      <div className="flex gap-4 mt-2 sm:mt-0">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white hover:text-amber-400 text-xl" />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white hover:text-amber-400 text-xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
