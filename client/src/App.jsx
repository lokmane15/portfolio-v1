import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Imports dyal Components kamlin
// تأكد أن هاد الملفات كلها كاينة ف folder components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";

// Component dyal Home jm3na fih l'accueil kaml bach yabqa code nqi
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
    // 1. Router howa lkbir (L'enveloppe globale)
    <Router>
      
      {/* 2. ScrollToTop dakhlt Router bach ykhdm (bach kola mara tbdel page ytl3 lfouq) */}
      <ScrollToTop />
      
      <div className="bg-slate-900 min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
        
        {/* 3. Navbar dayma kayna fix */}
        <Navbar />
        
        {/* 4. Routes: Hna fin kaytbdel lmo7tawa 3la 7sab lien */}
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path="/" element={<Home />} />
          
          {/* صفحة التفاصيل (Dynamic Route) */}
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>

        {/* 5. Footer dayma kayn */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;