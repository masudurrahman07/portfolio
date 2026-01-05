import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Configure Tailwind
    window.tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            primary: "#FF6B55",
            "primary-hover": "#E55A45",
            "background-light": "#F3F4F6",
            "background-dark": "#0F172A",
            "surface-light": "#FFFFFF",
            "surface-dark": "#1E293B",
          },
          fontFamily: {
            display: ["Poppins", "sans-serif"],
            sans: ["Poppins", "sans-serif"],
          },
          borderRadius: {
            DEFAULT: "0.5rem",
          },
        },
      },
    };

    // Check theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (selectedProject) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-white font-sans transition-colors duration-300"
      >
        <ProjectDetail 
          project={selectedProject} 
          onBack={() => setSelectedProject(null)} 
        />
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-white font-sans transition-colors duration-300"
      >
        <Navbar />
        <Hero />
        <Skills />
        <About />
        <Projects onProjectSelect={setSelectedProject} />
        <Contact />
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;