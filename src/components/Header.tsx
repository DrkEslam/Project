import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="text-2xl font-bold text-gray-900"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Eslam Hesham
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {['About', 'Projects', 'Services', 'Skills', 'Contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden bg-white border-t overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {isMenuOpen && (
            <nav className="py-4 space-y-2">
              {['About', 'Projects', 'Services', 'Skills', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </nav>
          )}
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;