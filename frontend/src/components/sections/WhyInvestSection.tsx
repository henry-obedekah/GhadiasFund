import { motion } from 'framer-motion';
import {
  Shield,
  TrendingUp,
  Globe,
  Users,
  Award,
  Lock,
  Zap,
} from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Competitive Returns',
    description: '8-20% annual returns depending on investment tier',
  },
  {
    icon: Shield,
    title: 'Professional Management',
    description: 'Expert fund managers with proven track record',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description:
      'Regulated investment fund following international best practices',
  },
  {
    icon: Users,
    title: 'Diaspora Community',
    description: 'Connect with like-minded investors building Ghana',
  },
  {
    icon: Award,
    title: 'Impact Reporting',
    description: 'Transparent quarterly reports on financial and social impact',
  },
  {
    icon: Lock,
    title: 'Capital Security',
    description: 'Multiple safeguards and insurance for your investment',
  },
  {
    icon: Zap,
    title: 'Flexible Options',
    description: 'Multiple investment tiers starting from $5,000',
  },
];

export const WhyInvestSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="relative py-20 px-4 bg-navy">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 md:text-5xl font-playfair-display font-bold text-cream mb-4">
            Why Invest with GHADIAS
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Seven compelling reasons to join our diaspora investment community
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-xl backdrop-blur border transition-all hover:border-gold/50
                  ${
                    index === 0 || index === 3 || index === 6
                      ? 'bg-gold/10 border-gold/30 lg:col-span-2 lg:flex lg:items-center'
                      : 'bg-cream/5 border-cream/20'
                  }`}
              >
                <Icon className="text-gold mb-4 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-h4 font-playfair-display font-bold text-cream mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-cream/70">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
