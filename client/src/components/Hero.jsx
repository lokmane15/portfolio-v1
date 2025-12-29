import { motion } from "framer-motion";
// import { FaDownload } from "react-icons/fa"; // إلا بغيتي أيقونة نقية (اختياري)

const Hero = () => {
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const name = "Lokmane-Ouarrachi";

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 bg-slate-900 overflow-hidden relative">
      
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

      {/* 1. Profile Image */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mb-8 relative"
      >
        <div className="w-52 h-52 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-2xl shadow-blue-500/50">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-900 bg-slate-800">
            <img 
              src="/images/me.jpg" 
              alt="Lokmane" 
              className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </motion.div>

      {/* 2. Name Animation */}
      <motion.h1
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight"
      >
        Hi, I'm{" "}
        <span className="inline-flex text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          {name.split("").map((char, index) => (
            <motion.span key={index} variants={letterAnimation}>
              {char}
            </motion.span>
          ))}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed"
      >
        Full Stack Developer | React & Node.js Enthusiast.
        <br />
        Turning ideas into real life products.
      </motion.p>

      {/* 👇👇 Buttons Group (جمعتهم كاملين هنا) 👇👇 */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        // flex-wrap: باش فالتليفون يهبطو للسطر إلا ضياق الحال
        className="flex flex-wrap gap-4 justify-center items-center"
      >
        {/* Contact Button (Primary - Blue) */}
        <a 
          href="#contact" 
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition shadow-lg shadow-blue-500/30 transform hover:-translate-y-1"
        >
          Contact Me
        </a>

        {/* Work Button (Secondary - Outline) */}
        <a 
          href="#projects" 
          className="px-8 py-3 border border-slate-600 text-white hover:border-blue-400 hover:text-blue-400 rounded-full font-bold transition transform hover:-translate-y-1"
        >
          My Work
        </a>

        {/* 👇👇 CV Button (Tertiary - Glassmorphism Style) 👇👇 */}
        <a 
          href="/cv.pdf" 
          download="Lokmane_CV.pdf"
          className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 rounded-full font-bold transition flex items-center gap-2 transform hover:-translate-y-1 group"
        >
          <span>Download CV</span>
          {/* أيقونة كتحرك فاش كدير هوفر */}
          <span className="text-xl group-hover:translate-y-1 transition-transform">📥</span>
        </a>

      </motion.div>
      {/* 👆👆 Fin Buttons 👆👆 */}

    </section>
  );
};

export default Hero;