import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    
    axios.get(`${API_URL}/api/projects/${id}`)
      .then(res => setProject(res.data))
      // .then(res => setProject(res.data)) <-- هادي كانت معاودة بالغلط، حيدتها
      .catch(err => console.error("Error fetching project details:", err));
  }, [id]);

  if (!project) return (
    // 👇 Loading: خلفية بيضاء فالضو، كحلة فالظلام
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center text-slate-900 dark:text-white transition-colors duration-300">
      <div className="text-xl animate-pulse">Loading project details...</div>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      // 👇 الصفحة: خلفية بيضاء فالضو، كحلة فالظلام
      className="min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-white p-6 pt-24 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* زر الرجوع */}
        <Link to="/" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 mb-8 w-fit transition-colors group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        {/* Header Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">{project.title}</h1>

        {/* Main Image (Cover) */}
        <div className="rounded-2xl overflow-hidden shadow-2xl mb-12 border border-gray-200 dark:border-slate-700 bg-gray-200 dark:bg-slate-800">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full max-h-[500px] object-cover" 
          />
        </div>

        {/* Info Grid (Details & Links) */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Left Column: Desc & Tech */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-500">Overview</h2>
            {/* 👇 النص: رمادي غامق فالضو، فاتح فالظلام */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6 whitespace-pre-line">
              {project.desc}
            </p>
            
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Technologies:</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                // 👇 Badges: ألوان متناسقة مع المود
                <span key={i} className="bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-blue-600 dark:text-blue-300 border border-gray-200 dark:border-slate-700 text-sm font-medium hover:border-blue-500 transition-colors cursor-default shadow-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Links Card */}
          {/* 👇 الكارطة الجانبية: بيضاء فالضو، كحلة فالظلام */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl h-fit border border-gray-200 dark:border-slate-700 sticky top-24 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Project Links</h3>
            <div className="flex flex-col gap-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-3 rounded-lg justify-center font-bold shadow-lg shadow-blue-500/20 text-white">
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a href="#" className="flex items-center gap-2 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition px-4 py-3 rounded-lg justify-center font-bold text-slate-700 dark:text-gray-200 border border-gray-200 dark:border-transparent">
                <FaGithub /> Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 👇👇 Gallery Section (Screenshots) 👇👇 */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="border-t border-gray-200 dark:border-slate-800 pt-12 transition-colors">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">
              App <span className="text-blue-600 dark:text-blue-500">Screenshots</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {project.screenshots.map((screen, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-slate-700 group cursor-pointer bg-gray-100 dark:bg-slate-800"
                >
                  <img 
                    src={screen} 
                    alt={`Interface ${index + 1}`} 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </motion.div>
  );
};

export default ProjectDetails;