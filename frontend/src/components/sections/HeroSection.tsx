import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

export const HeroSection = () => {
  const scrollVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden flex items-center justify-center pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-deep-green rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <div className="bg-navy/50 backdrop-blur-md px-4 py-2 rounded-full border border-gold/30">
            <p className="text-cream text-sm">Reg: CS023900226</p>
          </div>
          <div className="bg-navy/50 backdrop-blur-md px-4 py-2 rounded-full border border-gold/30">
            <p className="text-cream text-sm">TIN: C0066826144</p>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-h1 md:text-5xl lg:text-6xl font-playfair-display font-bold text-cream mb-6 leading-tight"
        >
          Bridging Diaspora Capital with Ghana's{' '}
          <span className="text-gradient-gold">
            Infrastructure & Economic Growth
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-cream/80 mb-12 max-w-3xl mx-auto"
        >
          GHADIAS Investment Fund connects diaspora investors with Ghana's most
          promising infrastructure and economic opportunities, delivering impact
          and returns.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button variant="hero" size="xl" className="group">
            Invest Now
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="hero-outline" size="xl">
            Download Prospectus
          </Button>
          <Button variant="hero-outline" size="xl">
            Speak to Advisor
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={scrollVariants}
          animate="animate"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-cream/60 text-sm">Scroll to explore</span>
            <ArrowDown className="text-gold animate-bounce" size={24} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
