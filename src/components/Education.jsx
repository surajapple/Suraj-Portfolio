import React from 'react';
import { motion } from 'framer-motion';
import { MdSchool, MdEmojiEvents, MdCardMembership } from 'react-icons/md';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Mumbai University',
    duration: '2025 – 2027',
    grade: 'Pursuing',
    icon: <MdSchool />
  },
  {
    degree: 'BSc in Information Technology',
    institution: 'Mumbai University',
    duration: '2022 – 2025',
    grade: 'CGPI: 6.83',
    icon: <MdSchool />
  },
  {
    degree: 'Higher Secondary Certificate (HSC) - IT',
    institution: 'Maharashtra State Board',
    duration: 'Completed',
    grade: '65.49%',
    icon: <MdSchool />
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Maharashtra State Board',
    duration: 'Completed',
    grade: '58.69%',
    icon: <MdSchool />
  }
];

const achievements = [
  "Best Advance Technology in Kotlin Programming (2023)",
  "Second Prize – Mumbai University Youth Fest (2023)"
];

const certifications = [
  "Introduction to Data Science in Python – Coursera",
  "Data Science Capstone – Coursera",
  "JavaScript, Bootstrap & PHP – Udemy"
];

const Education = () => {
  return (
    <section id="education" className="relative bg-gray-50/50 dark:bg-dark-background overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent via-green-50/30 to-transparent dark:via-green-900/10 pointer-events-none"></div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-semibold tracking-wide border border-green-100 dark:border-green-800/50">
            My Background
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Education & Achievements</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10 flex items-center">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center mr-4 shadow-lg shadow-green-500/30">
                <MdSchool className="w-6 h-6" />
              </span>
              Education
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-green-400 before:via-green-300 before:to-transparent dark:before:from-green-600 dark:before:via-green-800">
              {education.map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-dark-background bg-gradient-to-br from-green-400 to-emerald-600 text-white shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white dark:bg-dark-surface shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 hover:-translate-y-1 transition-transform">
                    <div className="text-green-600 dark:text-green-400 font-bold text-sm mb-2 tracking-wide uppercase">{item.duration}</div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-xl mb-2">{item.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">{item.institution}</p>
                    <div className="inline-block px-3 py-1 rounded-lg bg-gray-50 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 text-sm font-semibold border border-gray-200 dark:border-gray-700">
                      Grade: {item.grade}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 flex items-center">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white flex items-center justify-center mr-4 shadow-lg shadow-orange-500/30">
                  <MdEmojiEvents className="w-6 h-6" />
                </span>
                Achievements
              </h3>
              <div className="google-card p-8 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm border-t border-l border-white/50 dark:border-gray-700/50 shadow-xl shadow-orange-100/50 dark:shadow-none">
                <ul className="space-y-6">
                  {achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start group">
                      <span className="w-8 h-8 mr-4 flex items-center justify-center text-orange-500 bg-orange-50 dark:bg-orange-900/30 rounded-xl shrink-0 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
                        🏆
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-lg pt-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 flex items-center">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 text-white flex items-center justify-center mr-4 shadow-lg shadow-indigo-500/30">
                  <MdCardMembership className="w-6 h-6" />
                </span>
                Certifications
              </h3>
              <div className="google-card p-8 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm border-t border-l border-white/50 dark:border-gray-700/50 shadow-xl shadow-indigo-100/50 dark:shadow-none">
                <ul className="space-y-6">
                  {certifications.map((item, idx) => (
                    <li key={idx} className="flex items-start group">
                      <span className="w-8 h-8 mr-4 flex items-center justify-center text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl shrink-0 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                        📜
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-lg pt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
