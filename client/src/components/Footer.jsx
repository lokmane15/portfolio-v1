import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    // 👇 الخلفية: رمادي فاتح فالضو (bg-gray-100) وكحلة غامقة فالظلام (dark:bg-slate-950)
    <footer className="py-8 text-center border-t transition-colors duration-300 bg-gray-100 dark:bg-slate-950 border-gray-200 dark:border-slate-800 text-slate-600 dark:text-gray-400">
      
      <div className="flex justify-center gap-6 mb-4 text-2xl">
        {/* Icons: فالضو كيوليو كحلين/زرقين، وفالظلام بيضين */}
        <a 
          href="https://github.com/lokmane" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-black dark:hover:text-white transition-colors"
        >
            <FaGithub />
        </a>
        <a 
          href="https://linkedin.com/in/lokmane" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
        >
            <FaLinkedin />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
            <FaTwitter />
        </a>
      </div>

      <p className="text-sm font-medium">
        © {new Date().getFullYear()} Lokmane Portfolio. All rights reserved.
      </p>
      
      <p className="text-xs mt-2 text-slate-500 dark:text-slate-600">
        Built with MERN Stack (MongoDB, Express, React, Node)
      </p>
    </footer>
  );
};

export default Footer;