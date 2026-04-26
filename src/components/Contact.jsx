import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert("Message sent successfully! (This is a mockup)");
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="relative bg-white/40 dark:bg-dark-surface/40 overflow-hidden">
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-gradient-to-bl from-blue-100/50 via-purple-100/50 to-transparent dark:from-blue-900/20 dark:via-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-semibold tracking-wide border border-purple-100 dark:border-purple-800/50">
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8 bg-white/80 dark:bg-dark-surface/80 p-10 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 backdrop-blur-sm"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
            
            <div className="flex items-center group">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 dark:from-blue-900/50 dark:to-blue-800/50 dark:text-blue-400 group-hover:scale-110 transition-transform shadow-md">
                <MdLocationOn className="w-7 h-7" />
              </div>
              <div className="ml-6 flex flex-col">
                <span className="text-sm uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-1">Location</span>
                <span className="text-lg font-medium text-gray-900 dark:text-white">Kalamboli, Navi Mumbai, India</span>
              </div>
            </div>

            <div className="flex items-center group">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-green-100 to-green-200 text-green-600 dark:from-green-900/50 dark:to-green-800/50 dark:text-green-400 group-hover:scale-110 transition-transform shadow-md">
                <MdPhone className="w-7 h-7" />
              </div>
              <div className="ml-6 flex flex-col">
                <span className="text-sm uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-1">Phone</span>
                <a href="tel:+919867445133" className="text-lg font-medium text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors">+91-9867445133</a>
              </div>
            </div>

            <div className="flex items-center group">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 dark:from-purple-900/50 dark:to-purple-800/50 dark:text-purple-400 group-hover:scale-110 transition-transform shadow-md">
                <MdEmail className="w-7 h-7" />
              </div>
              <div className="ml-6 flex flex-col">
                <span className="text-sm uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-1">Email</span>
                <a href="mailto:zsuraj2003@gmail.com" className="text-lg font-medium text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">zsuraj2003@gmail.com</a>
              </div>
            </div>

            <div className="pt-10 mt-10 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-sm uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-6">Social Profiles</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/surajapple" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white dark:hover:text-gray-900 transition-all shadow-md hover:-translate-y-1">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/surajzaware/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-md hover:-translate-y-1">
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-dark-surface/80 p-10 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 backdrop-blur-sm h-full flex flex-col">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Send me a message</h3>
              
              <div className="mb-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all dark:text-white font-medium placeholder-gray-400"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all dark:text-white font-medium placeholder-gray-400"
                  placeholder="Your Email Address"
                />
              </div>
              
              <div className="mb-8 flex-1">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full h-full min-h-[150px] px-5 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none dark:text-white font-medium placeholder-gray-400"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-purple-500/30 transform hover:-translate-y-1 transition-all disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
