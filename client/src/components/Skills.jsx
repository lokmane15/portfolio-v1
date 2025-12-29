import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaLaravel, FaPython, FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript, SiOdoo, SiMysql, SiJira } from "react-icons/si";

const skills = [
  // 1. Frontend (السطر الأول)
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },

  // 2. Center (الوسط - هنا حطينا MySQL و Scrum باش يبانو فالقلب ديال السيت)
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-600" }, // ✅ الوسط
  { name: "Scrum", icon: <SiJira />, color: "text-blue-500" },  // ✅ الوسط
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },

  // 3. Backend & Others (السطر الثالث)
  { name: "Laravel", icon: <FaLaravel />, color: "text-red-600" },
  { name: "Python", icon: <FaPython />, color: "text-blue-400" },
  { name: "Odoo", icon: <SiOdoo />, color: "text-purple-500" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },

  // 4. Styles (السطر الأخير)
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-300" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-600" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          My <span className="text-blue-500">Skills</span>
        </motion.h2>

        {/* 👇 بدلنا Grid بـ Flex باش يجيو دايما موسطين وخا يشيطو فاللخر */}
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              // 👇 عطيناهم العرض ثابت (w-36) باش يجيو قد قد ف flex
              className="w-36 h-36 bg-slate-800 p-4 rounded-xl shadow-lg flex flex-col items-center justify-center border border-slate-700 hover:border-blue-500 transition-colors cursor-pointer group"
            >
              <div className={`text-5xl mb-3 ${skill.color} drop-shadow-lg`}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-300 group-hover:text-white transition">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;  