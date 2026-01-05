import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios"; 

const Contact = () => {
  // 1. States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  // 2. Handle Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const API_URL = import.meta.env.VITE_API_URL;
      
      await axios.post(`${API_URL}/api/contact`, formData);
      
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setStatus(null), 5000);

    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    // 👇 الخلفية: رمادي فاتح فالضو (bg-gray-50) وكحلة فالظلام (dark:bg-slate-900)
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          // 👇 العنوان: كحل فالضو، بيض فالظلام
          className="text-4xl font-bold text-slate-900 dark:text-white mb-8"
        >
          Let's <span className="text-blue-600 dark:text-blue-500">Connect</span>
        </motion.h2>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          // 👇 الفورم: خلفية بيضاء فالضو، كحلة فاتحة فالظلام
          className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Name" 
              required
              // 👇 Inputs: كحلين فالضو، بيضين فالظلام
              className="bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 p-4 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition" 
            />
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Email" 
              required
              className="bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 p-4 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition" 
            />
          </div>
          
          <textarea 
            rows="4" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Message" 
            required
            className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 p-4 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition mb-6"
          ></textarea>
          
          <button 
            disabled={status === "sending"}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition shadow-lg shadow-blue-500/30 disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* Feedback Messages */}
          {status === "success" && (
            <p className="text-green-600 dark:text-green-400 mt-4 font-medium">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 dark:text-red-400 mt-4 font-medium">❌ Failed to send message. Try again.</p>
          )}

        </motion.form>
      </div>
      
      {/* Footer Text */}
      <footer className="text-center text-gray-600 dark:text-gray-500 mt-20 text-sm">
        © 2026 Lokmane Portfolio. Built with React & Node.js.
      </footer>
    </section>
  );
};

export default Contact;