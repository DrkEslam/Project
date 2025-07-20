import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, TrendingUp, Target, DollarSign } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="https://cdn.discordapp.com/attachments/1036260892989456506/1396399038303047680/1752996977298-modified.png?ex=687df172&is=687c9ff2&hm=2c096938c483aadf062a36d46dfc794fbfc0b3c533c94ac99682a31da1c3719e&"
              alt="Eslam Hesham"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg object-cover"
            />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Senior Media Buyer
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Scaling profitable campaigns across Facebook, Google, TikTok & more. 
            <span className="text-blue-600 font-semibold"> $50M+ in ad spend managed</span> with 
            <span className="text-green-600 font-semibold"> 4.2x average ROAS</span>
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div 
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TrendingUp className="text-green-600" size={20} />
              <span className="font-semibold">4.2x Avg ROAS</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <DollarSign className="text-blue-600" size={20} />
              <span className="font-semibold">$50M+ Managed</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Target className="text-purple-600" size={20} />
              <span className="font-semibold">200+ Campaigns</span>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div 
            className="mt-16"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="mx-auto text-gray-400" size={24} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;