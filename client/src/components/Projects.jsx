import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // <--- 1. ضروري تكون هادي باش يخدم Link

const Projects = () => {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    // 2. تصحيح البورت لـ 5001 (حسب اخر تعديل درناه فالسيرفر)
    const API_URL = import.meta.env.VITE_API_URL; 
    const URL = `${API_URL}/api/projects`; // لاحظ Backticks `` ماشي ""

    console.log("Fetching from:", URL);

    axios.get(URL)
      .then(res => {
        console.log("Data jat:", res.data); 
        setProjects(res.data);
      })
      .catch(err => {
        console.error("Error fetching projects:", err);
        // Fallback data
        setProjects([
            {
                id: 1, 
                title: "Server Error", 
                desc: "Check if backend is running on port 5001.", 
                tech: ["Error"], 
                image: "", 
                link: "#"
            }
        ]);
      });
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Featured <span className="text-blue-500">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden bg-slate-700">
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
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm flex-grow">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-slate-700 text-blue-300 px-2 py-1 rounded-md border border-slate-600">
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