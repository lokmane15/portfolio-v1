import { motion } from "framer-motion";

const Hero = () => {
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const name = "Lokmane-Ouarrachi";

  return (
    // 👇👇 لاحظ التغيير هنا: bg-gray-50 للضو و dark:bg-slate-900 للظلام
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 bg-gray-50 dark:bg-slate-900 overflow-hidden relative transition-colors duration-300">
      
      {/* Blobs (نقصنا الشفافية فالضو باش مايضروش فالعين) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8 relative"
      >
        <div className="w-52 h-52 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-2xl">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-900 bg-white dark:bg-slate-800">
            <img src="/images/me.jpg" alt="Lokmane" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </motion.div>

      <motion.h1
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        // 👇 التغيير فالنص: text-slate-900 (كحل فالضو)
        className="text-5xl md:text-7xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight"
      >
        Hi, I'm{" "}
        <span className="inline-flex text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
          {name.split("").map((char, index) => (
            <motion.span key={index} variants={letterAnimation}>{char}</motion.span>
          ))}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        // 👇 التغيير فالنص الثانوي
        className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8 leading-relaxed"
      >
        Full Stack Developer | React & Node.js Enthusiast.
        <br /> Turning ideas into real life products.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex flex-wrap gap-4 justify-center items-center"
      >
        <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition shadow-lg transform hover:-translate-y-1">
          Contact Me
        </a>
        <a href="#projects" className="px-8 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white hover:border-blue-500 hover:text-blue-500 rounded-full font-bold transition transform hover:-translate-y-1">
          My Work
        </a>
        <a href="/cv.pdf" download="Lokmane_CV.pdf" className="px-8 py-3 bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-white/20 rounded-full font-bold transition flex items-center gap-2 transform hover:-translate-y-1">
          <span>Download CV</span>
          <span>📥</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;