import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full py-6 px-4 md:px-12 lg:px-24 flex justify-between items-center fixed top-0 z-50 backdrop-blur-sm bg-background-light/80 dark:bg-background-dark/80">
        <div className="text-2xl font-bold tracking-wide">
          {/* Logo space - can add logo here later */}
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <button 
            onClick={() => scrollToSection('home')} 
            className="hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="hover:text-primary transition-colors text-gray-500 dark:text-gray-400"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="hover:text-primary transition-colors text-gray-500 dark:text-gray-400"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contacts')} 
            className="hover:text-primary transition-colors text-gray-500 dark:text-gray-400"
          >
            Contacts
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-icons-outlined">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)}></div>
          <div className="fixed top-0 right-0 h-full w-64 bg-surface-light dark:bg-surface-dark shadow-xl pt-20 px-6">
            <div className="flex flex-col space-y-6 text-lg font-medium">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-left hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contacts')} 
                className="text-left hover:text-primary transition-colors"
              >
                Contacts
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;