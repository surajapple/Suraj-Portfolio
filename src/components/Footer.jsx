import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tighter">
            Suraj<span className="text-primary">.dev</span>
          </span>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            © {new Date().getFullYear()} Suraj Zaware. All rights reserved.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#home" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
            Home
          </a>
          <a href="#about" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
            About
          </a>
          <a href="#projects" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
            Projects
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
