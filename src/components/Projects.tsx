import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Target, DollarSign, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Fashion Brand Scale",
      client: "StyleHub Fashion",
      category: "E-commerce",
      image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Scaled a fashion e-commerce brand from $10K to $100K monthly revenue through strategic Facebook and Instagram campaigns.",
      metrics: {
        roas: "5.2x",
        spend: "$2.1M",
        revenue: "$10.9M",
        cpa: "$12.50"
      },
      platforms: ["Facebook", "Instagram", "Google Shopping"],
      duration: "12 months"
    },
    {
      title: "SaaS Lead Generation Campaign",
      client: "TechFlow Solutions",
      category: "SaaS",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Generated 500+ qualified leads monthly for a B2B SaaS platform using LinkedIn and Google Ads with advanced targeting.",
      metrics: {
        roas: "4.8x",
        spend: "$850K",
        revenue: "$4.1M",
        cpa: "$85.00"
      },
      platforms: ["LinkedIn", "Google Ads", "Microsoft Ads"],
      duration: "8 months"
    },
    {
      title: "Mobile App User Acquisition",
      client: "FitTrack App",
      category: "Mobile App",
      image: "https://images.pexels.com/photos/4498168/pexels-photo-4498168.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Acquired 100K+ high-value users for a fitness tracking app using TikTok and Facebook campaigns with creative testing.",
      metrics: {
        roas: "3.9x",
        spend: "$1.5M",
        revenue: "$5.8M",
        cpa: "$15.00"
      },
      platforms: ["TikTok", "Facebook", "Snapchat"],
      duration: "10 months"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
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
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Case studies showcasing successful campaigns and the measurable results 
            achieved for clients across different industries.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              <div className="lg:flex">
                <motion.div 
                  className="lg:w-1/3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </motion.div>
                <div className="lg:w-2/3 p-8">
                  <motion.div 
                    className="flex items-center justify-between mb-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">{project.duration}</span>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 mb-6 leading-relaxed"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div 
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="text-center p-4 bg-green-50 rounded-lg"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <TrendingUp className="text-green-600 mx-auto mb-2" size={20} />
                      <div className="text-2xl font-bold text-green-600">{project.metrics.roas}</div>
                      <div className="text-sm text-gray-600">ROAS</div>
                    </motion.div>
                    <motion.div 
                      className="text-center p-4 bg-blue-50 rounded-lg"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <DollarSign className="text-blue-600 mx-auto mb-2" size={20} />
                      <div className="text-2xl font-bold text-blue-600">{project.metrics.spend}</div>
                      <div className="text-sm text-gray-600">Ad Spend</div>
                    </motion.div>
                    <motion.div 
                      className="text-center p-4 bg-purple-50 rounded-lg"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Target className="text-purple-600 mx-auto mb-2" size={20} />
                      <div className="text-2xl font-bold text-purple-600">{project.metrics.revenue}</div>
                      <div className="text-sm text-gray-600">Revenue</div>
                    </motion.div>
                    <motion.div 
                      className="text-center p-4 bg-orange-50 rounded-lg"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Eye className="text-orange-600 mx-auto mb-2" size={20} />
                      <div className="text-2xl font-bold text-orange-600">{project.metrics.cpa}</div>
                      <div className="text-sm text-gray-600">CPA</div>
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {project.platforms.map((platform, platformIndex) => (
                      <motion.span
                        key={platformIndex}
                        className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {platform}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;