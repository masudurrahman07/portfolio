import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';


const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  
  // Mouse tracking for parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations for mouse tracking
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);
  
  // Transform mouse position to rotation and translation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        
        mouseX.set(x);
        mouseY.set(y);
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleResumeDownload = () => {
    alert('Resume download functionality will be implemented when your resume is ready!');
  };

  const handleProjectInquiry = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.5, opacity: 0, rotateY: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen flex items-center pt-20 px-4 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 107, 85, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 107, 85, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Subtle Background Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={`blue-${i}`}
            className="absolute w-1.5 h-1.5 bg-blue-400/20 rounded-full"
            style={{
              right: `${10 + (i * 15)}%`,
              bottom: `${15 + (i * 10)}%`,
            }}
            animate={{
              x: [-8, 8, -8],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Dynamic Background Blobs */}
      <motion.div 
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,85,0.15) 0%, rgba(255,107,85,0.05) 50%, transparent 100%)',
        }}
        animate={{
          scale: [1, 1.3, 1.1, 1],
          opacity: [0.3, 0.6, 0.4, 0.3],
          x: [0, 50, -30, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)',
        }}
        animate={{
          scale: [1, 1.2, 1.4, 1],
          opacity: [0.2, 0.5, 0.3, 0.2],
          x: [0, -40, 30, 0],
          y: [0, 20, -40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, #FF6B55, #FF8E53, #FFB74D)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.5, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Greeting with Animated Dot */}
          <motion.div variants={itemVariants} className="relative">
            <motion.h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Hello
              <motion.span 
                className="text-primary inline-block ml-2"
                animate={{ 
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                .
              </motion.span>
            </motion.h2>
            
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
          
          {/* Name Introduction */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center space-x-4"
          >
            <motion.div 
              className="h-[3px] bg-gradient-to-r from-primary to-primary-hover rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <motion.h3 
              className="text-2xl md:text-4xl font-light bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              I'm Masud
            </motion.h3>
          </motion.div>
          
          {/* Main Title with Gradient and Animation */}
          <motion.div variants={itemVariants} className="relative">
            <motion.h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-wide">
              <motion.div
                className="bg-gradient-to-r from-primary via-red-500 to-orange-500 bg-clip-text text-transparent mb-4"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  Web
                </motion.span>
              </motion.div>
              <motion.div
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-primary bg-clip-text text-transparent"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                style={{ backgroundSize: "200% 200%" }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  Developer
                </motion.span>
              </motion.div>
            </motion.h1>
            
            {/* Glowing effect behind text */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-3xl -z-10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          {/* Action Buttons with Enhanced Effects */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 pt-8"
          >
            <motion.button 
              onClick={handleProjectInquiry}
              className="relative group bg-gradient-to-r from-primary to-primary-hover text-white px-10 py-4 rounded-2xl font-semibold overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(255, 107, 85, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-hover to-primary opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Button content */}
              <span className="relative z-10 flex items-center">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mr-2"
                >
                  🚀
                </motion.span>
                Got a project?
              </span>
              
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-2xl"
                initial={{ scale: 0, opacity: 1 }}
                whileHover={{ scale: 1, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
            
            <motion.button 
              onClick={handleResumeDownload}
              className="relative group border-2 border-gray-300 dark:border-gray-600 hover:border-primary text-gray-800 dark:text-white hover:text-primary px-10 py-4 rounded-2xl font-semibold backdrop-blur-sm bg-white/10 dark:bg-black/10"
              whileHover={{ 
                scale: 1.05,
                borderColor: "#FF6B55",
                boxShadow: "0 10px 30px -5px rgba(255, 107, 85, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="relative z-10 flex items-center">
                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mr-2"
                >
                  📄
                </motion.span>
                My Resume
              </span>
            </motion.button>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex space-x-6 pt-8"
          >
            {[
              { href: "https://github.com/masudurrahman07", icon: "github", color: "#333" },
              { href: "https://www.linkedin.com/in/masudurrahman07/", icon: "linkedin", color: "#0077B5" }
            ].map((social, index) => (
              <motion.a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-14 h-14 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-sm flex items-center justify-center text-gray-600 dark:text-gray-400 border border-gray-200/20 dark:border-gray-700/20"
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  backgroundColor: social.color,
                  color: "#FFFFFF",
                  boxShadow: `0 15px 30px -5px ${social.color}40`
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 50, rotateY: -180 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  delay: 1.8 + index * 0.1,
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10 
                }}
              >
                <motion.svg 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {social.icon === 'github' && (
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  )}
                  {social.icon === 'linkedin' && (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  )}
                </motion.svg>
                
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0"
                  style={{ backgroundColor: social.color }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Enhanced Profile Image */}
        <motion.div 
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative flex justify-center lg:justify-end"
        >
          {/* Static Decorative Shapes */}
          <div className="absolute -top-10 -left-10 w-16 h-16 border border-primary/20 rounded-lg opacity-50" />
          <div className="absolute -bottom-10 -right-10 w-12 h-12 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full" />

          {/* Clean Profile Container */}
          <div className="relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] group">
            {/* Animated Ring - stops on hover */}
            <motion.div 
              className="absolute inset-0 rounded-full border-[2px] border-primary/20"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{
                rotate: 0,
                transition: { duration: 0.5 }
              }}
            />
            
            {/* Profile Image Container */}
            <motion.div 
              className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-end justify-center shadow-2xl"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(255, 107, 85, 0.2)",
              }}
              transition={{ 
                duration: 0.3, 
                ease: "easeOut" 
              }}
            >
              <motion.img 
                src="/profile.png.png" 
                alt="Portrait of Masud, Web Developer" 
                className="w-full h-full object-cover object-top"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center text-gray-400 dark:text-gray-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-2 font-medium">Scroll Down</span>
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center"
            whileHover={{ borderColor: "#FF6B55" }}
          >
            <motion.div
              className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;