import {
  ArrowRight,
  TrendingUp,
  Shield,
  Users,
  Leaf,
  Star,
} from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-deep-green to-navy">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-cream mb-6">
            Our Investment Products
          </h1>
          <p className="text-xl text-cream/90 mb-8 max-w-3xl mx-auto">
            Choose from our range of investment products designed to meet your
            financial goals while creating impact in Ghana
          </p>
        </div>
      </section>

      {/* Investment Products */}
      <section className="py-16 px-4 bg-cream/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Impact Fund */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-gold/20 hover:shadow-gold transition-all duration-300">
              <div className="bg-gradient-to-r from-gold to-yellow-300 p-6 text-navy">
                <div className="flex items-center gap-3 mb-3">
                  <Leaf size={32} />
                  <h3 className="text-2xl font-bold">Impact Fund</h3>
                </div>
                <p className="text-sm font-medium">Direct investments</p>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-gold text-gold" size={16} />
                  ))}
                  <span className="text-cream/70 text-sm ml-2">
                    Most Popular
                  </span>
                </div>
                <p className="text-cream/80 mb-6 leading-relaxed">
                  Invest directly in identified projects in Ghana with variable
                  returns based on project performance.
                </p>
                <ul className="space-y-3 mb-6 text-sm text-cream/70">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Direct social impact
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Financial returns 8-15%
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Complete transparency
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Minimum $5,000 investment
                  </li>
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
            <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-gold/20 hover:shadow-gold transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp size={32} />
                  <h3 className="text-2xl font-bold">Growth Fund</h3>
                </div>
                <p className="text-sm font-medium">Flexible savings</p>
              </div>
              <div className="p-6">
                <p className="text-cream/80 mb-6 leading-relaxed">
                  Monthly or quarterly savings plans converted into professional
                  investment funds.
                </p>
                <ul className="space-y-3 mb-6 text-sm text-cream/70">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Investment flexibility
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Professional management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Diversification
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Minimum $1,000 investment
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-400/90 hover:to-blue-500/90 text-white font-bold">
                  Create a Plan
                </Button>
              </div>
            </div>

            {/* Fixed Income */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-gold/20 hover:shadow-gold transition-all duration-300">
              <div className="bg-gradient-to-r from-green-400 to-green-500 p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Shield size={32} />
                  <h3 className="text-2xl font-bold">Fixed Income</h3>
                </div>
                <p className="text-sm font-medium">Guaranteed income</p>
              </div>
              <div className="p-6">
                <p className="text-cream/80 mb-6 leading-relaxed">
                  Secure savings with guaranteed fixed interest rates for
                  conservative investors.
                </p>
                <ul className="space-y-3 mb-6 text-sm text-cream/70">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Guaranteed fixed rates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Maximum security
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Predictability
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Minimum $500 investment
                  </li>
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-400/90 hover:to-green-500/90 text-white font-bold"
                  onClick={() => navigate('/contact')}
                >
                  Invest Securely
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-cream mb-12">
            Why Choose Our Products?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-yellow-300 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-navy" size={40} />
              </div>
              <h3 className="text-xl font-bold text-cream mb-2">
                Competitive Returns
              </h3>
              <p className="text-cream/70">
                8-15% annualized returns with documented performance
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-yellow-300 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-navy" size={40} />
              </div>
              <h3 className="text-xl font-bold text-cream mb-2">
                Capital Security
              </h3>
              <p className="text-cream/70">
                Robust security measures and insurance coverage
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-yellow-300 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-navy" size={40} />
              </div>
              <h3 className="text-xl font-bold text-cream mb-2">
                Expert Management
              </h3>
              <p className="text-cream/70">
                Professional fund managers with proven track records
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-yellow-300 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-navy" size={40} />
              </div>
              <h3 className="text-xl font-bold text-cream mb-2">
                Social Impact
              </h3>
              <p className="text-cream/70">
                Every investment contributes to Ghana's development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-16 px-4 bg-cream/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-cream mb-12">
            Simple Investment Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Create Account',
                desc: 'Sign up and complete KYC verification',
              },
              {
                step: 2,
                title: 'Choose Product',
                desc: 'Select the investment product that suits your goals',
              },
              {
                step: 3,
                title: 'Fund Account',
                desc: 'Transfer funds securely through our platform',
              },
              {
                step: 4,
                title: 'Track Performance',
                desc: 'Monitor your investments and returns in real-time',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 text-navy font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-cream mb-2">
                  {item.title}
                </h3>
                <p className="text-cream/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gold/20 to-yellow-300/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-cream">
            Ready to Start Investing?
          </h2>
          <p className="text-lg mb-8 text-cream/90 max-w-2xl mx-auto">
            Join thousands of diaspora investors building wealth while making an
            impact in Ghana
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              className="bg-gradient-to-r from-gold to-yellow-300 hover:from-gold/90 hover:to-yellow-300/90 text-navy font-bold px-8 py-3"
              onClick={() => navigate('/contact')}
            >
              Get Started Now <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              variant="outline"
              className="border-cream text-cream hover:bg-cream hover:text-navy px-8 py-3"
              onClick={() => navigate('/contact')}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
