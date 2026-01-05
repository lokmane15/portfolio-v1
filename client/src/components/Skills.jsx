import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaLaravel, FaPython, FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript, SiOdoo, SiMysql, SiJira } from "react-icons/si";

const skills = [
  // 1. Frontend (السطر الأول)
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },

  // 2. Center (الوسط)
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-600" },
  { name: "Scrum", icon: <SiJira />, color: "text-blue-500" },
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
    // 👇 الخلفية: رمادي فاتح فالضو (bg-gray-50) وكحلة فالظلام (dark:bg-slate-900)
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          // 👇 العنوان: كحل فالضو، بيض فالظلام
          className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white"
        >
          My <span className="text-blue-600 dark:text-blue-500">Skills</span>
        </motion.h2>

        {/* Flexbox باش يجيو موسطين */}
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              // 👇 الكارطة: بيضاء فالضو (bg-white) وكحلة فالظلام (dark:bg-slate-800) مع Border خفيف
              className="w-36 h-36 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md dark:shadow-lg flex flex-col items-center justify-center border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors cursor-pointer group"
            >
              <div className={`text-5xl mb-3 ${skill.color} drop-shadow-sm`}>
                {skill.icon}
              </div>
              
              {/* 👇 سمية المهارة: رمادي فالضو، بيض فالظلام */}
              <h3 className="text-lg font-semibold text-slate-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition">
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