import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOpenInNew, MdSource } from 'react-icons/md';

const projects = [
  {
    id: 1,
    title: 'Music Web Player',
    category: 'Full Stack',
    description: 'Web-based music player with play/pause/skip features. Integrated frontend and backend with a clean, responsive UI.',
    tech: ['React', 'Node.js', 'Express', 'CSS'],
    image: '/music-player.png',
  },
  {
    id: 2,
    title: 'AI Smart Classroom',
    category: 'AI',
    description: 'AI-powered classroom with automation and real-time monitoring. Built REST APIs using FastAPI/Flask and integrated ML models.',
    tech: ['Python', 'FastAPI', 'Machine Learning', 'React'],
    image: '/smart-classroom.png',
  },
  {
    id: 3,
    title: 'Medical Diagnosis Assistant',
    category: 'AI',
    description: 'Predicts diseases based on user symptoms and provides basic medical guidance. Includes CRUD operations for medical records.',
    tech: ['Python', 'Flask', 'SQL', 'HTML/CSS'],
    image: '/medical-assistant.png',
  }
];

const categories = ['All', 'AI', 'Full Stack', 'Web'];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    <section id="projects" className="relative bg-white/60 dark:bg-dark-surface/40 overflow-hidden">
      <div className="absolute -left-40 top-40 w-96 h-96 bg-cyan-100/50 dark:bg-cyan-900/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wide border border-cyan-100 dark:border-cyan-800/50">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h2>
          
          <div className="flex justify-center space-x-2 md:space-x-4 overflow-x-auto pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  filter === cat
                    ? 'bg-gradient-to-r from-primary to-cyan-500 text-white shadow-lg shadow-cyan-500/30 scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="google-card overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300 bg-white dark:bg-dark-surface shadow-xl shadow-gray-200/40 dark:shadow-none border border-gray-100 dark:border-gray-800"
              >
                <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden flex items-center justify-center">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <div className="flex flex-col items-center opacity-50 group-hover:opacity-100 transition-opacity">
                      <span className="text-5xl mb-2">🖥️</span>
                      <span className="text-gray-500 dark:text-gray-400 font-medium tracking-wide">{project.title}</span>
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 space-x-4">
                     <button className="p-3 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-110 shadow-lg" title="Live Preview">
                       <MdOpenInNew className="w-5 h-5" />
                     </button>
                     <button className="p-3 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-110 shadow-lg" title="Source Code">
                       <MdSource className="w-5 h-5" />
                     </button>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col relative">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-cyan-500/10 dark:to-cyan-400/10 rounded-tl-[100px] pointer-events-none"></div>
                  <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md border border-gray-200 dark:border-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
