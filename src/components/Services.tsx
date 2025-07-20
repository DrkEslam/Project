import React from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart3, Settings, Zap, Users, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Target className="text-blue-600" size={32} />,
      title: "Paid Social Media",
      description: "Expert management of Facebook, Instagram, TikTok, LinkedIn, and Snapchat campaigns with advanced targeting and creative optimization.",
      features: ["Advanced Audience Targeting", "Creative Testing & Optimization", "Conversion Tracking Setup", "Performance Analysis"]
    },
    {
      icon: <BarChart3 className="text-green-600" size={32} />,
      title: "Google Ads Management",
      description: "Comprehensive Google Ads management including Search, Display, Shopping, and YouTube campaigns for maximum ROI.",
      features: ["Keyword Research & Strategy", "Ad Copy Development", "Landing Page Optimization", "Bid Management"]
    },
    {
      icon: <Settings className="text-purple-600" size={32} />,
      title: "Campaign Optimization",
      description: "Continuous testing and optimization of existing campaigns to improve performance and reduce costs.",
      features: ["A/B Testing Strategy", "Budget Allocation", "Audience Refinement", "Creative Iteration"]
    },
    {
      icon: <Zap className="text-orange-600" size={32} />,
      title: "Performance Analytics",
      description: "In-depth analysis and reporting on campaign performance with actionable insights and recommendations.",
      features: ["Custom Dashboards", "ROI Analysis", "Attribution Modeling", "Monthly Reporting"]
    },
    {
      icon: <Users className="text-red-600" size={32} />,
      title: "Audience Development",
      description: "Building and refining target audiences using advanced segmentation and lookalike modeling techniques.",
      features: ["Customer Research", "Persona Development", "Lookalike Audiences", "Retargeting Setup"]
    },
    {
      icon: <TrendingUp className="text-indigo-600" size={32} />,
      title: "Growth Strategy",
      description: "Strategic consulting on scaling advertising efforts and expanding into new markets and channels.",
      features: ["Channel Strategy", "Budget Planning", "Market Expansion", "Growth Roadmaps"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
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
            Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive media buying services designed to scale your business 
            and maximize your advertising ROI across all major platforms.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-blue-200 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div 
                className="mb-6"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.icon}
              </motion.div>
              <motion.h3 
                className="text-xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {service.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {service.description}
              </motion.p>
              <motion.ul 
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-center text-sm text-gray-600"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Scale Your Advertising?
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Let's discuss how we can optimize your campaigns and drive measurable results 
              for your business with strategic media buying.
            </motion.p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;