import React, { useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';

// A reusable component for the navigation links
const Navigation = ({ setIsOpen }) => {
  // These links match the sections of your portfolio
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    // Replaced custom classes with Tailwind CSS for layout and styling
    <ul className="flex flex-col items-center gap-6 sm:flex-row">
      {links.map((link) => (
        <li key={link.name}>
          <a
            // This onClick handler closes the mobile menu when a link is clicked
            onClick={() => setIsOpen && setIsOpen(false)}
            className="text-lg font-medium transition-colors text-neutral-400 hover:text-white"
            href={link.href}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

// The main Navbar component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-lg bg-midnight/50">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
            Dewansh Jha
          </a>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img 
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} 
              className="w-6 h-6" 
              alt="Menu Icon" 
            />
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      
      {/* Mobile menu dropdown with a smooth closing animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="block overflow-hidden text-center sm:hidden"
            // Improved animation for a smoother dropdown effect
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="py-5">
              {/* Pass setIsOpen to allow closing the menu from a link click */}
              <Navigation setIsOpen={setIsOpen} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;