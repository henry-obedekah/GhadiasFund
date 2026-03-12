import { motion } from 'framer-motion';
import {
  Building2,
  Zap,
  Sprout,
  Briefcase,
  Factory,
  Hammer,
  Code2,
  Wallet,
  Heart,
  Droplet,
  BookOpen,
  Package,
  TrendingUp,
} from 'lucide-react';

const sectors = [
  { icon: Building2, name: 'Real Estate', color: 'from-orange-500 to-red-500' },
  {
    icon: Zap,
    name: 'Renewable Energy',
    color: 'from-green-500 to-emerald-500',
  },
  { icon: Sprout, name: 'Agribusiness', color: 'from-lime-500 to-green-600' },
  { icon: Briefcase, name: 'SMEs', color: 'from-blue-500 to-cyan-500' },
  { icon: Factory, name: 'Manufacturing', color: 'from-gray-600 to-slate-700' },
  { icon: Hammer, name: 'Construction', color: 'from-yellow-600 to-amber-700' },
  { icon: Code2, name: 'Technology', color: 'from-purple-500 to-indigo-600' },
  { icon: Wallet, name: 'Fintech', color: 'from-pink-500 to-rose-600' },
  { icon: Heart, name: 'Healthcare', color: 'from-red-500 to-pink-600' },
  { icon: Droplet, name: 'Petroleum', color: 'from-slate-700 to-gray-900' },
  { icon: BookOpen, name: 'Education', color: 'from-indigo-500 to-blue-600' },
  { icon: Package, name: 'Commodities', color: 'from-amber-600 to-orange-700' },
  {
    icon: TrendingUp,
    name: 'Money Market',
    color: 'from-teal-500 to-cyan-600',
  },
];

export const SectorsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
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
            Investment Sectors
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            We invest across 13 strategic sectors driving Ghana's economic
            transformation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="group">
                <div
                  className={`relative p-6 rounded-xl bg-gradient-to-br ${sector.color} opacity-10 
                  group-hover:opacity-20 transition-opacity overflow-hidden border border-gold/20 
                  group-hover:border-gold/50 cursor-pointer h-full flex flex-col items-center justify-center`}
                >
                  <Icon
                    className="text-gold mb-3 group-hover:scale-110 transition-transform"
                    size={32}
                  />
                  <p className="text-cream text-center font-dm-sans font-medium">
                    {sector.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
