import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Zap, Globe } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="text-blue-600" size={24} />,
      title: "Google Ads Certified",
      description: "Advanced certification in Google Ads and Analytics"
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "350+ Clients Served",
      description: "From startups to Fortune 500 companies"
    },
    {
      icon: <Zap className="text-purple-600" size={24} />,
      title: "Performance Focused",
      description: "Data-driven approach with measurable results"
    },
    {
      icon: <Globe className="text-orange-600" size={24} />,
      title: "Global Reach",
      description: "Campaigns across 20+ countries"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Senior Media Buyer with 7+ years of experience scaling profitable campaigns 
            and driving measurable ROI for businesses across diverse industries.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-3xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Expertise That Drives Results
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-6 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I specialize in creating and optimizing high-performance advertising campaigns 
              across multiple platforms. My data-driven approach combines creative strategy 
              with technical precision to deliver exceptional ROI for my clients.
            </motion.p>
            <motion.p 
              className="text-gray-600 mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              From e-commerce scale-ups to SaaS companies, I've helped businesses achieve 
              their growth objectives through strategic media buying, advanced audience 
              targeting, and continuous optimization.
            </motion.p>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">7+ years in digital advertising</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">Managed $50M+ in ad spend</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">Expert in Facebook, Google, TikTok, LinkedIn</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="mb-4">{achievement.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;