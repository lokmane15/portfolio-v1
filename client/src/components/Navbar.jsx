import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
// 👇👇 1. ضروري هاد Import يكون كاين 👇👇
import ThemeToggle from "./ThemeToggle"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-500 cursor-pointer">
          Lokmane<span className="text-slate-900 dark:text-white">.Dev</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-slate-600 dark:text-gray-300 font-medium">
            <li><a href="#hero" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
          
          {/* 👇👇 2. هنا البوطونة بالنسبة للـ PC 👇👇 */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-4">
          {/* 👇👇 3. زدناها هنا باش تبان فالتليفون حدا الموني 👇👇 */}
          <ThemeToggle />
          
          <div className="text-slate-900 dark:text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-slate-600 dark:text-gray-300">
              <li><a href="#hero" onClick={closeMenu} className="hover:text-blue-500">Home</a></li>
              <li><a href="#skills" onClick={closeMenu} className="hover:text-blue-500">Skills</a></li>
              <li><a href="#projects" onClick={closeMenu} className="hover:text-blue-500">Projects</a></li>
              <li><a href="#contact" onClick={closeMenu} className="hover:text-blue-500">Contact</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;