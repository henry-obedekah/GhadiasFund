import { motion } from 'framer-motion';
import { TrendingDown, AlertCircle, Network, DollarSign } from 'lucide-react';

const problems = [
  {
    icon: TrendingDown,
    title: 'Remittance Inefficiency',
    description:
      'Current diaspora remittances go primarily to consumption, not productive investment. Capital lacks structured channels for economic impact.',
  },
  {
    icon: AlertCircle,
    title: 'Lack of Structured Channels',
    description:
      'Diaspora investors struggle to find professional, vetted investment opportunities that align with their values and return expectations.',
  },
  {
    icon: Network,
    title: 'Systemic Impact Gap',
    description:
      'Without coordinated investment, individual diaspora contributions fail to create sustainable, transformational economic change.',
  },
  {
    icon: DollarSign,
    title: 'Financing Gap',
    description:
      "Ghana's infrastructure and SME sectors lack the estimated $15-20B annually needed to fuel rapid, inclusive economic growth.",
  },
];

export const ProblemSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          className="mb-16 text-center"
        >
          <h2 className="text-h2 md:text-5xl font-playfair-display font-bold text-cream mb-4">
            The Challenge
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Ghana faces critical challenges that structured diaspora investment
            can solve
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-deep-green/20 to-navy/20 border border-gold/20 p-8 rounded-xl hover:border-gold/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <Icon
                    className="text-gold flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                    size={32}
                  />
                  <div>
                    <h3 className="text-h4 font-playfair-display font-bold text-cream mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-cream/70">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
