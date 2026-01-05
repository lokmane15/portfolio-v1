import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";

// ✅ تأكد أن هاد Home Component مكتوب هكا
const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* 👇 هنا فين زدنا classes ديال Dark Mode */}
      <div className="bg-white dark:bg-slate-900 min-h-screen text-slate-900 dark:text-white font-sans transition-colors duration-300">
        
        <Navbar />
        
        {/* 👇👇 المشكل غالبا كان هنا: تأكد أن Routes كاينة وبداخلها Route ديال Home 👇👇 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;