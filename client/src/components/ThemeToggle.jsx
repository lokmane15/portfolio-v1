import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  // 1. كنشوفو واش ديجا مسجل الاختيار ف localStorage، إلا لا كنبداو بـ dark
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    // 2. كنطبقو التغيير على html tag
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // 3. كنسجلو الاختيار باش يبقى عاقل عليه وخا دير refresh
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 transition-colors shadow-lg border border-slate-300 dark:border-slate-700"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? <FaMoon className="text-xl" /> : <FaSun className="text-xl text-orange-500" />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;