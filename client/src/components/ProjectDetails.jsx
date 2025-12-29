import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Port 5001 (تأكد أن السيرفر شاعل ف 5001)
   const API_URL = import.meta.env.VITE_API_URL;
    
    // لاحظ Backticks `` باش ندمجو الرابط مع id
    axios.get(`${API_URL}/api/projects/${id}`)
      .then(res => setProject(res.data))
      .then(res => setProject(res.data))
      .catch(err => console.error("Error fetching project details:", err));
  }, [id]);

  if (!project) return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
      <div className="text-xl animate-pulse">Loading project details...</div>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-slate-900 text-white p-6 pt-24"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* زر الرجوع */}
        <Link to="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 w-fit transition-colors group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        {/* Header Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>

        {/* Main Image (Cover) */}
        <div className="rounded-2xl overflow-hidden shadow-2xl mb-12 border border-slate-700">
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
            <h2 className="text-2xl font-bold mb-4 text-blue-500">Overview</h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6 whitespace-pre-line">
              {project.desc}
            </p>
            
            <h3 className="text-xl font-bold mb-3">Technologies:</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-slate-800 px-3 py-1 rounded-full text-blue-300 border border-slate-700 text-sm font-medium hover:border-blue-500 transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Links Card */}
          <div className="bg-slate-800 p-6 rounded-xl h-fit border border-slate-700 sticky top-24 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Project Links</h3>
            <div className="flex flex-col gap-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-3 rounded-lg justify-center font-bold shadow-lg shadow-blue-500/20 text-white">
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a href="#" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 transition px-4 py-3 rounded-lg justify-center font-bold text-gray-200">
                <FaGithub /> Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 👇👇 Gallery Section (Screenshots) 👇👇 */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="border-t border-slate-800 pt-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              App <span className="text-blue-500">Screenshots</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {project.screenshots.map((screen, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl overflow-hidden shadow-lg border border-slate-700 group cursor-pointer"
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