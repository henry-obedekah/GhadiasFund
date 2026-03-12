import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Users,
  Leaf,
  Zap,
  Smartphone,
  Building2,
  Truck,
  Heart,
  Droplet,
  Lightbulb,
  Briefcase,
  BookOpen,
  Boxes,
  Landmark,
} from 'lucide-react';
import { Button } from '../ui/button';
import ghanaImage from '../../assets/images/Ghana.jpeg';

const AnimatedCounter = ({
  target,
  suffix = '',
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationFrame = requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 },
    );

    const element = document.getElementById(`counter-${target}`);
    if (element) observer.observe(element);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (element) observer.unobserve(element);
    };
  }, [target, duration]);

  return (
    <span id={`counter-${target}`}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectors = [
    {
      icon: Zap,
      name: 'Renewable Energy',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Smartphone,
      name: 'Fintech',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Building2,
      name: 'Real Estate',
      color: 'from-red-400 to-pink-500',
    },
    {
      icon: Leaf,
      name: 'Agribusiness',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Truck,
      name: 'Logistics',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Heart,
      name: 'Healthcare',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: Droplet,
      name: 'Oil & Gas',
      color: 'from-gray-600 to-gray-800',
    },
    {
      icon: Lightbulb,
      name: 'Tech Startups',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Briefcase,
      name: 'SME Financing',
      color: 'from-green-500 to-teal-600',
    },
    {
      icon: BookOpen,
      name: 'Education',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Boxes,
      name: 'Commodities Trading',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Landmark,
      name: 'Infrastructure',
      color: 'from-gray-700 to-gray-900',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero & Key Figures Combined Section */}
      <section
        className="relative min-h-screen bg-gradient-to-r from-navy via-deep-green to-navy text-cream px-4 flex flex-col justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ghanaImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Hero Content */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Bridging the Gap Between Diaspora Capital & Ghana's Infrastructure
            Needs
          </h1>
          <p className="text-lg md:text-xl mb-12 text-cream/90 max-w-4xl mx-auto leading-relaxed">
            Connect your wealth to Ghana's future. Invest in high-impact
            projects with 8-15% annual returns.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button
              className="bg-gradient-to-r from-gold to-yellow-300 hover:from-gold/90 hover:to-yellow-300/90 text-navy font-bold px-8 py-3"
              onClick={() => navigate('/products')}
            >
              Start Investing <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              variant="outline"
              className="border-cream text-cream hover:bg-cream hover:text-navy px-8 py-3"
              onClick={() => navigate('/about')}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Key Figures Content */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-cream">
            Our Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-gold/20 hover:bg-white/20 transition-all duration-500">
              <div className="text-4xl font-bold text-gold mb-4">
                $<AnimatedCounter target={300} suffix="M" />
              </div>
              <p className="text-cream/80">Capital target in 5 years</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-gold/20 hover:bg-white/20 transition-all duration-500">
              <div className="text-4xl font-bold text-gold mb-4">
                <AnimatedCounter target={10000} suffix="+" />
              </div>
              <p className="text-cream/80">MSMEs to support</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-gold/20 hover:bg-white/20 transition-all duration-500">
              <div className="text-4xl font-bold text-gold mb-4">
                <AnimatedCounter target={45000} suffix="+" />
              </div>
              <p className="text-cream/80">Jobs created/maintained annually</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-gold/20 hover:bg-white/20 transition-all duration-500">
              <div className="text-4xl font-bold text-gold mb-4">
                <AnimatedCounter target={15} suffix="%" />
              </div>
              <p className="text-cream/80">Annualized returns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Transition */}
      <div className="h-32 bg-gradient-to-b from-navy/80 via-deep-green/60 to-transparent"></div>

      {/* Value Proposition */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-cream">
            Why Invest with GHADIAS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20">
              <TrendingUp className="text-gold flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="font-bold text-xl mb-2 text-cream">
                  Competitive Returns
                </h3>
                <p className="text-cream/80">
                  Annualized returns of 8-15% based on documented and
                  transparent investments
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20">
              <Leaf className="text-gold flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="font-bold text-xl mb-2 text-cream">
                  Documented Social Impact
                </h3>
                <p className="text-cream/80">
                  Every investment creates jobs and supports local Ghanaian
                  businesses
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20">
              <Shield className="text-gold flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="font-bold text-xl mb-2 text-cream">
                  International Governance
                </h3>
                <p className="text-cream/80">
                  Global compliance standards and professional management of
                  your capital
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20">
              <Users className="text-gold flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="font-bold text-xl mb-2 text-cream">
                  Capital Security
                </h3>
                <p className="text-cream/80">
                  Robust security measures and maximum transparency on all
                  investments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Products */}
      <section className="py-16 px-4 bg-cream/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-cream">
            Our Investment Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Impact Fund */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-gold/20">
              <div className="bg-gradient-to-r from-gold to-yellow-300 p-6 text-navy">
                <h3 className="text-2xl font-bold">Impact Fund</h3>
                <p className="text-sm opacity-90">Direct investments</p>
              </div>
              <div className="p-6">
                <p className="text-cream/80 mb-4">
                  Invest directly in identified projects in Ghana with variable
                  returns based on project performance.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-cream/70">
                  <li>✓ Direct social impact</li>
                  <li>✓ Financial returns</li>
                  <li>✓ Complete transparency</li>
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-gold to-yellow-300 hover:from-gold/90 hover:to-yellow-300/90 text-navy font-bold"
                  onClick={() => navigate('/sectors')}
                >
                  Explore Projects
                </Button>
              </div>
            </div>

            {/* Growth Fund */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-gold/20">
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-6 text-white">
                <h3 className="text-2xl font-bold">Growth Fund</h3>
                <p className="text-sm opacity-90">Flexible savings</p>
              </div>
              <div className="p-6">
                <p className="text-cream/80 mb-4">
                  Monthly or quarterly savings plans converted into professional
                  investment funds.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-cream/70">
                  <li>✓ Investment flexibility</li>
                  <li>✓ Professional management</li>
                  <li>✓ Diversification</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-400/90 hover:to-blue-500/90 text-white font-bold">
                  Create a Plan
                </Button>
              </div>
            </div>

            {/* Fixed Income */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-gold/20">
              <div className="bg-gradient-to-r from-green-400 to-green-500 p-6 text-white">
                <h3 className="text-2xl font-bold">Fixed Income</h3>
                <p className="text-sm opacity-90">Guaranteed income</p>
              </div>
              <div className="p-6">
                <p className="text-cream/80 mb-4">
                  Secure savings with guaranteed fixed interest rates for
                  conservative investors.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-cream/70">
                  <li>✓ Guaranteed fixed rates</li>
                  <li>✓ Maximum security</li>
                  <li>✓ Predictability</li>
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-400/90 hover:to-green-500/90 text-white font-bold"
                  onClick={() => navigate('/products')}
                >
                  Invest Securely
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Sectors */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-cream">
            Investment Sectors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition cursor-pointer border border-gold/20"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${sector.color} flex items-center justify-center mx-auto mb-3`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <p className="font-semibold text-cream text-sm">
                    {sector.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gold/20 to-yellow-300/20 backdrop-blur-sm text-cream py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-cream/90">
            Join diaspora investors transforming Ghana
          </p>
          <Button className="bg-gradient-to-r from-gold to-yellow-300 hover:from-gold/90 hover:to-yellow-300/90 text-navy font-bold px-10 py-3 text-lg">
            Start Investing Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
