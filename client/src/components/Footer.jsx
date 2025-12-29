import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 py-8 text-center border-t border-slate-800">
      <div className="flex justify-center gap-6 mb-4 text-2xl">
        {/* بدل الروابط هنا بالروابط ديالك الحقيقية */}
        <a href="https://github.com/lokmane" target="_blank" className="hover:text-white transition"><FaGithub /></a>
        <a href="https://linkedin.com/in/lokmane" target="_blank" className="hover:text-blue-400 transition"><FaLinkedin /></a>
        <a href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition"><FaTwitter /></a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Lokmane Portfolio. All rights reserved.
      </p>
      <p className="text-xs mt-2 text-slate-600">Built with MERN Stack (MongoDB, Express, React, Node)</p>
    </footer>
  );
};

export default Footer;