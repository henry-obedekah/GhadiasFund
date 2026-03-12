import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
}

const Counter = ({ end, suffix = '', prefix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / 100;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

export const ObjectivesSection = () => {
  const objectives = [
    {
      icon: '💰',
      value: 300,
      suffix: 'M+',
      prefix: '$',
      label: 'Capital to Mobilize',
    },
    {
      icon: '📈',
      value: 15,
      suffix: '%',
      label: 'Target Average Returns',
    },
    {
      icon: '👥',
      value: 45000,
      suffix: '+',
      label: 'Jobs to Create',
    },
    {
      icon: '🏢',
      value: 10000,
      suffix: '+',
      label: 'MSMEs to Support',
    },
  ];

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
            Our Objectives
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Measurable goals driving Ghana's economic transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl mb-4">{obj.icon}</div>
              <div className="text-5xl font-bold text-gold mb-2">
                <Counter
                  end={obj.value}
                  suffix={obj.suffix}
                  prefix={obj.prefix}
                />
              </div>
              <p className="text-gray-700 font-dm-sans">{obj.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
