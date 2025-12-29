// client/src/components/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios"; 

const Contact = () => {
  // 1. States باش نتحكمو فالمعلومات
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  // 2. دالة كتسجل أي حرف كتكتبو
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. دالة الإرسال (Submit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // كنصيفطو داتا للسيرفر ف بورت 5001
      const API_URL = import.meta.env.VITE_API_URL;
      
      await axios.post(`${API_URL}/api/contact`, formData);
      
      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); // خوي الفورم
      
      // حيد الميساج الاخضر بعد 5 ثواني
      setTimeout(() => setStatus(null), 5000);

    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-white mb-8"
        >
          Let's <span className="text-blue-500">Connect</span>
        </motion.h2>

        <motion.form 
          onSubmit={handleSubmit} // ربطنا الدالة هنا
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Name" 
              required
              className="bg-slate-900 border border-slate-700 p-4 rounded-lg text-white focus:outline-none focus:border-blue-500 transition" 
            />
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Email" 
              required
              className="bg-slate-900 border border-slate-700 p-4 rounded-lg text-white focus:outline-none focus:border-blue-500 transition" 
            />
          </div>
          
          <textarea 
            rows="4" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Message" 
            required
            className="w-full bg-slate-900 border border-slate-700 p-4 rounded-lg text-white focus:outline-none focus:border-blue-500 transition mb-6"
          ></textarea>
          
          <button 
            disabled={status === "sending"} // باش مايكليكيش جوج مرات
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition shadow-lg shadow-blue-500/30 disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* ميساجات النجاح أو الفشل */}
          {status === "success" && (
            <p className="text-green-400 mt-4">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-4">❌ Failed to send message. Try again.</p>
          )}

        </motion.form>
      </div>
      
      <footer className="text-center text-gray-500 mt-20 text-sm">
        © 2025 Lokmane Portfolio. Built with React & Node.js.
      </footer>
    </section>
  );
};

export default Contact;