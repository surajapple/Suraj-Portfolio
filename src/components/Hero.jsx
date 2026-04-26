import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { MdDownload, MdArrowForward } from 'react-icons/md';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Software Engineer | AI Enthusiast";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 blur-3xl opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-green-100 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20 blur-3xl opacity-60 pointer-events-none translate-y-1/4 -translate-x-1/4" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-primary/10 to-purple-500/10 dark:from-primary/20 dark:to-purple-500/20 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
      
      <div className="section-container relative z-10 w-full flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-5 py-2 rounded-full bg-white/60 dark:bg-dark-surface/60 backdrop-blur-sm text-primary text-sm font-semibold tracking-wide mb-8 border border-white dark:border-gray-800 shadow-sm"
        >
          👋 Welcome to my portfolio
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight"
        >
          Hi, I'm <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-600">Suraj Zaware</span>.
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl font-bold text-gray-600 dark:text-gray-400 mb-8 h-[1.2em]"
        >
          {text}<span className="animate-pulse text-primary">|</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl leading-relaxed mx-auto"
        >
          I build scalable, user-centric web applications and integrate AI-powered solutions. Passionate about exploring new technologies and crafting seamless digital experiences.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <Link to="projects" smooth={true} duration={500} offset={-70}>
            <button className="google-btn-primary group text-base px-8 py-4 shadow-lg shadow-blue-500/30">
              View My Work
              <MdArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <a href="https://drive.google.com/file/d/1habhtQ_WCYRtXsbDBPCm4f_Keyl_nhVy/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="google-btn-outline group text-base px-8 py-4 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm shadow-sm border-2">
            <MdDownload className="mr-2 group-hover:-translate-y-1 transition-transform" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
