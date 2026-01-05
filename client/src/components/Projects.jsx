import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

const Projects = () => {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL; 
    const URL = `${API_URL}/api/projects`;

    console.log("Fetching from:", URL);

    axios.get(URL)
      .then(res => {
        setProjects(res.data);
      })
      .catch(err => {
        console.error("Error fetching projects:", err);
        setProjects([
            {
                id: 1, 
                title: "Server Error", 
                desc: "Check if backend is running.", 
                tech: ["Error"], 
                image: "", 
                link: "#"
            }
        ]);
      });
  }, []);

  return (
    // 👇 الخلفية: رمادي فاتح فالضو (bg-gray-50) وكحلة فالظلام (dark:bg-slate-900)
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // 👇 العنوان: كحل فالضو، بيض فالظلام
          className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white"
        >
          Featured <span className="text-blue-600 dark:text-blue-500">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              // 👇 الكارطة: بيضاء فالضو (bg-white)، كحلة فالظلام (dark:bg-slate-800) مع Border خفيف
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden bg-gray-200 dark:bg-slate-700">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* 👇 عنوان المشروع: كحل فالضو، بيض فالظلام */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                
                {/* 👇 الوصف: رمادي غامق فالضو، رمادي فاتح فالظلام */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm flex-grow">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    // 👇 Badges ديال التكنولوجيا: ألوان متناسقة مع المود
                    <span key={i} className="text-xs bg-gray-100 dark:bg-slate-700 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-md border border-gray-200 dark:border-slate-600 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <Link 
                   to={`/project/${project.id}`} 
                   className="inline-block w-full text-center py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-600 transition shadow-lg mt-auto"
                 >
                   View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;