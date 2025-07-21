import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "أحمد محمود",
      role: "مدير التسويق، جوميا مصر",
      company: "E-commerce",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "إسلام ساعدنا نوصل لجمهور أوسع وأكثر تفاعلاً. الحملات اللي عملها كانت مدروسة جداً وحققت نتائج ممتازة في زيادة المبيعات والوعي بالبراند. شخص محترف ومتفهم للسوق المصري كويس جداً.",
      rating: 5
    },
    {
      name: "مريم عبد الرحمن",
      role: "مؤسسة، فاشن بوتيك",
      company: "Fashion",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "تعاملي مع إسلام كان تجربة رائعة. فهم طبيعة البراند بتاعي وعرف يوصل الرسالة للعملاء المناسبين. الحملات كانت إبداعية وحققت تفاعل عالي جداً. أنصح أي حد عايز يطور أعماله يتعامل معاه.",
      rating: 5
    },
    {
      name: "كريم حسام",
      role: "مدير العمليات، طلبات",
      company: "Food Delivery",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "إسلام عنده فهم عميق لسلوك المستهلك المصري. الاستراتيجيات اللي وضعها ساعدتنا نوصل لعملاء جدد في مناطق مختلفة. شغله منظم ومتابعته مستمرة، وده اللي خلى النتائج تظهر بسرعة.",
      rating: 5
    },
    {
      name: "نورهان صلاح",
      role: "مديرة التسويق، سوق.كوم",
      company: "E-commerce",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "التعامل مع إسلام كان قرار صحيح جداً. خبرته في الإعلانات الرقمية واضحة من أول يوم. ساعدنا نحسن من أداء الحملات بشكل كبير وزود معدل التحويل. شخص يعتمد عليه ومتخصص في شغله.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
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
            Client Testimonials
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Hear what my clients have to say about the results we've achieved together 
            and the impact on their business growth.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div
                className="absolute top-6 right-6"
                initial={{ opacity: 0, rotate: -180 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Quote className="text-blue-200" size={32} />
              </motion.div>
              
              <motion.div 
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <motion.h4 
                    className="font-bold text-gray-900"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {testimonial.name}
                  </motion.h4>
                  <motion.p 
                    className="text-blue-600 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {testimonial.role}
                  </motion.p>
                  <motion.p 
                    className="text-gray-500 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {testimonial.company}
                  </motion.p>
                </div>
              </motion.div>

              <motion.div 
                className="flex mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="text-yellow-400 fill-current" size={20} />
                  </motion.div>
                ))}
              </motion.div>

              <motion.p 
                className="text-gray-700 leading-relaxed italic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                "{testimonial.quote}"
              </motion.p>
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
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Join These Success Stories?
            </motion.h3>
            <motion.p 
              className="mb-6 opacity-90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Let's discuss how we can achieve similar results for your business 
              with strategic media buying and optimization.
            </motion.p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;