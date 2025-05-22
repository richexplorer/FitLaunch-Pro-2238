import React from 'react';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">FitLife</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#features" className="hover:text-primary transition-colors">Features</a>
              <a href="#programs" className="hover:text-primary transition-colors">Programs</a>
              <a href="#trainers" className="hover:text-primary transition-colors">Trainers</a>
              <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <FiMenu className="h-6 w-6" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;