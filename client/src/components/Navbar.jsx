import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500 cursor-pointer">
          Lokmane<span className="text-white">.Dev</span>
        </h1>

        {/* Desktop Menu (PC) */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <li><a href="#hero" className="hover:text-blue-400 transition">Home</a></li>
          <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Dropdown (Phone) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-gray-300">
              <li><a href="#hero" onClick={closeMenu} className="hover:text-blue-400">Home</a></li>
              <li><a href="#skills" onClick={closeMenu} className="hover:text-blue-400">Skills</a></li>
              <li><a href="#projects" onClick={closeMenu} className="hover:text-blue-400">Projects</a></li>
              <li><a href="#contact" onClick={closeMenu} className="hover:text-blue-400">Contact</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;