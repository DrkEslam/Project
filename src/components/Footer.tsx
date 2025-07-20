import React from 'react';
import { Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/eslamhesham",
      label: "LinkedIn"
    },
    {
      icon: <Twitter size={20} />,
      href: "https://twitter.com/eslamhesham",
      label: "Twitter"
    },
    {
      icon: <Facebook size={20} />,
      href: "https://facebook.com/eslamhesham",
      label: "Facebook"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Eslam Hesham</h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Senior Media Buyer specializing in scaling profitable campaigns across all major advertising platforms. 
              Let's drive measurable growth for your business.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-400" />
                <a
                  href="mailto:EslamHesham0@outlook.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  EslamHesham0@outlook.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gray-400" />
                <a
                  href="tel:+201124892251"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +201124892251
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Eslam Hesham. All rights reserved. Built with passion for performance marketing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;