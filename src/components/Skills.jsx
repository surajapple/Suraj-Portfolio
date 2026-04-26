import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiC, SiTailwindcss, SiDotnet, SiExpress, SiFastapi, SiMysql, SiPostgresql } from 'react-icons/si';
import { MdSmartToy, MdComputer, MdStorage, MdLanguage } from 'react-icons/md';

const skillCategories = [
  {
    title: 'Languages',
    icon: <MdLanguage className="w-8 h-8 text-blue-500" />,
    skills: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'C', icon: <SiC /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
    ]
  },
  {
    title: 'Frontend',
    icon: <MdComputer className="w-8 h-8 text-indigo-500" />,
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ]
  },
  {
    title: 'Backend',
    icon: <FaNodeJs className="w-8 h-8 text-green-500" />,
    skills: [
      { name: '.NET', icon: <SiDotnet /> },
      { name: 'ExpressJS', icon: <SiExpress /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
    ]
  },
  {
    title: 'Databases',
    icon: <MdStorage className="w-8 h-8 text-yellow-500" />,
    skills: [
      { name: 'SQL Server', icon: <FaDatabase /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
    ]
  },
  {
    title: 'AI Tools',
    icon: <MdSmartToy className="w-8 h-8 text-red-500" />,
    skills: [
      { name: 'Antigravity', icon: null },
      { name: 'n8n', icon: null },
      { name: 'Claude Code', icon: null },
      { name: 'Lovable AI', icon: null },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Skills = () => {
  return (
    <section id="skills" className="relative bg-gray-50/50 dark:bg-dark-background overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-blue-50/50 dark:to-blue-900/10 pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide border border-blue-100 dark:border-blue-800/50">
            My Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Technical Skills</h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="google-card p-8 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm border border-gray-100 dark:border-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-none">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent dark:from-primary/20 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl mr-4 text-primary group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{category.title}</h3>
              </div>
              <ul className="space-y-4 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-gray-600 dark:text-gray-300 font-medium">
                    <span className="w-8 h-8 mr-3 flex items-center justify-center text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-lg group-hover:text-primary transition-colors">
                      {skill.icon ? skill.icon : <span className="w-2 h-2 rounded-full bg-primary" />}
                    </span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
