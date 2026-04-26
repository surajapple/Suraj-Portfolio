import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative bg-white/40 dark:bg-dark-surface/40 backdrop-blur-md overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-200/50 dark:bg-purple-900/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-200/50 dark:bg-blue-900/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-semibold tracking-wide border border-purple-100 dark:border-purple-800/50">
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900 dark:text-white">Get To Know Me</h2>
          
          <div className="google-card p-10 md:p-14 relative overflow-hidden bg-white/80 dark:bg-dark-surface/80 backdrop-blur-xl border-t border-l border-white/50 dark:border-gray-700/50 shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full pointer-events-none"></div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 mx-auto text-center">
              <p className="mb-6 leading-relaxed">
                Hello! I'm Suraj, a BSc IT graduate and an aspiring MCA student based in Navi Mumbai, India. I am deeply passionate about Artificial Intelligence and Full-Stack Web Development.
              </p>
              <p className="mb-6 leading-relaxed">
                My journey in tech has led me to build a variety of applications, ranging from AI-powered diagnostic tools to intelligent classroom systems. I enjoy bridging the gap between complex backend logic and clean, intuitive user interfaces.
              </p>
              <p className="mb-10 leading-relaxed">
                Currently, my focus is on designing scalable, user-centric systems while constantly learning and exploring new technologies in the fast-evolving tech landscape.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto border-t border-gray-100 dark:border-gray-800 pt-8">
                <div className="flex flex-col items-center p-4 rounded-2xl bg-gray-50/50 dark:bg-gray-800/50">
                  <span className="text-2xl mb-2">📍</span>
                  <span className="font-bold text-gray-900 dark:text-white mb-1">Location</span>
                  <span className="text-gray-600 dark:text-gray-400">Navi Mumbai, India</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-2xl bg-gray-50/50 dark:bg-gray-800/50">
                  <span className="text-2xl mb-2">✉️</span>
                  <span className="font-bold text-gray-900 dark:text-white mb-1">Email</span>
                  <a href="mailto:zsuraj2003@gmail.com" className="text-primary hover:underline transition-all">zsuraj2003@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
