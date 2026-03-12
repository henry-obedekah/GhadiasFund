import { motion } from 'framer-motion';
import { Target, TrendingUp, PieChart, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const products = [
  {
    icon: Target,
    name: 'Impact Fund',
    returns: '8-15%',
    description: 'Direct investments in transformative infrastructure projects',
    features: [
      'Project-specific investments',
      'Quarterly impact reporting',
      'Professional project management',
      '3-7 year investment horizon',
    ],
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: TrendingUp,
    name: 'Growth Fund',
    returns: '12-20%',
    description: 'Diversified portfolio of high-growth opportunities',
    features: [
      'Multi-sector diversification',
      'Monthly returns distribution',
      'Active portfolio management',
      '2-5 year investment horizon',
    ],
    color: 'from-blue-500 to-indigo-600',
    featured: true,
  },
  {
    icon: PieChart,
    name: 'Fixed Income Fund',
    returns: '6-10%',
    description: 'Capital preservation with guaranteed fixed returns',
    features: [
      'Guaranteed fixed rates',
      'Monthly interest payments',
      'Low volatility',
      '1-5 year terms',
    ],
    color: 'from-yellow-500 to-amber-600',
  },
];

export const ProductsSection = () => {
  return (
    <section className="relative py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 md:text-5xl font-playfair-display font-bold text-navy mb-4">
            Investment Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the investment strategy that aligns with your financial goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-2xl ${
                  product.featured
                    ? 'md:col-span-1 md:row-span-2 md:scale-105'
                    : ''
                }`}
              >
                {/* Card Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10`}
                />

                {/* Card Content */}
                <div
                  className={`relative p-8 h-full bg-white/50 backdrop-blur border-2 ${
                    product.featured
                      ? 'border-navy/30 shadow-premium'
                      : 'border-gray-200/50 shadow-lg'
                  } hover:border-gold/50 transition-all flex flex-col`}
                >
                  {/* Featured Badge */}
                  {product.featured && (
                    <div className="absolute top-4 right-4 bg-gold text-navy px-3 py-1 rounded-full text-sm font-bold">
                      FEATURED
                    </div>
                  )}

                  {/* Icon */}
                  <Icon className="text-navy mb-4" size={40} />

                  {/* Title */}
                  <h3 className="text-h4 font-playfair-display font-bold text-navy mb-2">
                    {product.name}
                  </h3>

                  {/* Returns */}
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-gold mb-1">
                      {product.returns}
                    </p>
                    <p className="text-sm text-gray-600">Annual Returns</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 flex-grow">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {product.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 rounded-full bg-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant={product.featured ? 'gold' : 'default'}
                    className="w-full"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
