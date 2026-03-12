import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

export const CTASection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-navy overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-deep-green rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-h2 md:text-5xl lg:text-6xl font-playfair-display font-bold text-cream mb-6"
        >
          Invest Back Home.{' '}
          <span className="text-gradient-gold">Build Wealth.</span> Create
          Impact.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-cream/80 mb-12 max-w-2xl mx-auto"
        >
          Join thousands of diaspora investors transforming Ghana's economic
          future while building substantial wealth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
        >
          <Button variant="hero" size="xl" className="group">
            Start Investing Now
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="hero-outline" size="xl">
            Schedule a Consultation
          </Button>
          <Button variant="hero-outline" size="xl">
            View Investment Prospectus
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-cream/20"
        >
          <p className="text-cream/60 text-sm mb-6">
            TRUSTED BY DIASPORA INVESTORS WORLDWIDE
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-cream/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-1">$150M+</div>
              <p className="text-sm">Assets Under Management</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gold/30" />
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-1">2,500+</div>
              <p className="text-sm">Active Investors</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gold/30" />
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-1">15+</div>
              <p className="text-sm">Active Projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
