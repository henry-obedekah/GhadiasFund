import { motion } from 'framer-motion';
import { Globe, TrendingUp, Users, Target } from 'lucide-react';

const stats = [
  { icon: Globe, value: '$300M+', label: 'Capital Mobilized' },
  { icon: TrendingUp, value: '15%', label: 'Average Returns' },
  { icon: Users, value: '45K+', label: 'Jobs Created' },
  { icon: Target, value: '10K+', label: 'MSMEs Supported' },
];

export const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-h2 md:text-5xl font-playfair-display font-bold text-navy mb-4">
            About GHADIAS Investment Fund
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-yellow-300 mb-6" />
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            GHADIAS Investment Fund Limited is a professional investment vehicle
            dedicated to mobilizing diaspora capital and channeling it into
            Ghana's most critical infrastructure and economic development
            projects. We bridge the gap between diaspora investors seeking
            returns with purpose and Ghana's pressing need for strategic capital
            investment.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-premium hover:shadow-gold transition-shadow"
              >
                <Icon className="text-gold mb-4" size={32} />
                <div className="text-4xl font-bold text-navy mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 rounded-xl shadow-premium"
        >
          <h3 className="text-h3 font-playfair-display font-bold text-navy mb-6">
            Our Mission
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            To create a sustainable bridge between Ghana's diaspora and its
            development aspirations by providing strategic capital investment
            opportunities that deliver both financial returns and measurable
            social impact.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe in "investing back home" – channeling diaspora resources
            into infrastructure, renewable energy, agribusiness, and technology
            that transform lives while building wealth for our investors.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
