import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const platforms = [
    { name: "Facebook Ads", level: 95, color: "bg-blue-600" },
    { name: "Google Ads", level: 92, color: "bg-green-600" },
    { name: "TikTok Ads", level: 88, color: "bg-purple-600" },
    { name: "LinkedIn Ads", level: 85, color: "bg-indigo-600" },
    { name: "Snapchat Ads", level: 80, color: "bg-yellow-500" },
    { name: "Twitter Ads", level: 75, color: "bg-blue-400" }
  ];

  const tools = [
    "Google Analytics 4",
    "Facebook Business Manager",
    "Google Tag Manager",
    "Triple Whale",
    "Northbeam",
    "Klaviyo",
    "Hotjar",
    "Unbounce",
    "Canva",
    "Figma",
    "Zapier",
    "Slack"
  ];

  const certifications = [
    {
      title: "Google Ads Certified",
      issuer: "Google",
      year: "2024"
    },
    {
      title: "Facebook Blueprint Certified",
      issuer: "Meta",
      year: "2024"
    },
    {
      title: "Google Analytics Individual Qualification",
      issuer: "Google",
      year: "2023"
    },
    {
      title: "TikTok Marketing Science Global Certification",
      issuer: "TikTok",
      year: "2023"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
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
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Proficient across all major advertising platforms with certified expertise 
            and hands-on experience in the latest tools and technologies.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Platform Expertise */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Platform Expertise
            </motion.h3>
            <div className="space-y-6">
              {platforms.map((platform, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <motion.div 
                    className="flex justify-between items-center mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="font-semibold text-gray-900">{platform.name}</span>
                    <span className="text-gray-600">{platform.level}%</span>
                  </motion.div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      className={`h-3 rounded-full transition-all duration-1000 ${platform.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${platform.level}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Certifications */}
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Tools & Software
              </motion.h3>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-3 rounded-lg shadow-sm text-center text-sm font-medium text-gray-700 hover:shadow-md transition-shadow duration-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Certifications
              </motion.h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white p-4 rounded-lg shadow-sm"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <motion.h4 
                      className="font-semibold text-gray-900 mb-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {cert.title}
                    </motion.h4>
                    <motion.p 
                      className="text-sm text-gray-600"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {cert.issuer} • {cert.year}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <motion.div 
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Performance Track Record
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">$50M+</div>
              <div className="text-gray-600">Total Ad Spend Managed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div className="text-3xl font-bold text-green-600 mb-2">4.2x</div>
              <div className="text-gray-600">Average ROAS</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-gray-600">Campaigns Launched</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Clients Served</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;