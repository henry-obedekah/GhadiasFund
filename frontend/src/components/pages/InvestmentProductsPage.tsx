import { useEffect } from 'react';
import {
  ArrowRight,
  TrendingUp,
  Zap,
  PieChart,
  Target,
  DollarSign,
  LineChart,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { useNavigate } from 'react-router-dom';

const InvestmentProductsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-deep-green to-navy">
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cream">
            Our Investment Products
          </h1>
          <p className="text-xl text-cream/90">
            Three ways to grow your wealth while impacting Ghana
          </p>
        </div>
      </section>

      {/* Products Comparison */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="impact" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="impact">Impact Fund</TabsTrigger>
              <TabsTrigger value="growth">Growth Fund</TabsTrigger>
              <TabsTrigger value="fixed">Fixed Income</TabsTrigger>
            </TabsList>

            {/* Impact Fund */}
            <TabsContent value="impact">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-gold/20 flex flex-col">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="flex-shrink-0" size={32} />
                    <h2 className="text-3xl font-bold">Impact Fund</h2>
                  </div>
                  <p className="text-lg opacity-90">
                    Direct Impact Investments
                  </p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-cream flex items-center gap-2">
                        <DollarSign size={20} className="text-green-400" />
                        Potential Returns
                      </h3>
                      <p className="text-3xl font-bold text-green-400 mb-1">
                        12-20%
                      </p>
                      <p className="text-cream/70 text-sm">
                        Annualized returns depending on projects
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-cream flex items-center gap-2">
                        <LineChart size={20} className="text-blue-400" />
                        Structure
                      </h3>
                      <div className="space-y-1 text-cream/70 text-sm">
                        <p>
                          <span className="font-semibold">Type:</span> Project
                          shares
                        </p>
                        <p>
                          <span className="font-semibold">Distribution:</span>{' '}
                          According to project schedule
                        </p>
                        <p>
                          <span className="font-semibold">Liquidity:</span>{' '}
                          Moderate
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-cream flex items-center gap-2">
                        <Zap size={20} className="text-yellow-400" />
                        Benefits
                      </h3>
                      <div className="space-y-1 text-cream/70 text-sm">
                        <p>Measurable social impact</p>
                        <p>Complete project transparency</p>
                        <p>Strict opportunity selection</p>
                        <p>Regular performance monitoring</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-cream">
                    Features
                  </h3>
                  <ul className="space-y-2 text-cream/70 text-sm mb-6 flex-1">
                    <li className="flex gap-2">
                      <span className="text-green-400 font-bold">✓</span>
                      <span>Direct investments in Ghanaian projects</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-400 font-bold">✓</span>
                      <span>
                        Variable returns based on project performance
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-400 font-bold">✓</span>
                      <span>Documented and transparent social impact</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-400 font-bold">✓</span>
                      <span>Investment horizon: Typically 3-7 years</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-400 font-bold">✓</span>
                      <span>Minimum amount: $10,000</span>
                    </li>
                  </ul>
                  <Button
                    variant="hero"
                    className="w-full"
                    onClick={() => navigate('/invest')}
                  >
                    Explore Projects{' '}
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Growth Fund */}
            <TabsContent value="growth">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-gold/20 flex flex-col">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="flex-shrink-0" size={32} />
                    <h2 className="text-3xl font-bold">Growth Fund</h2>
                  </div>
                  <p className="text-lg opacity-90">
                    Flexible & Diversified Savings
                  </p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-cream flex items-center gap-2">
                        <DollarSign size={20} className="text-blue-400" />
                        Potential Returns
                      </h3>
                      <p className="text-3xl font-bold text-blue-400 mb-1">
                        8-15%
                      </p>
                      <p className="text-cream/70 text-sm">
                        Annualized returns with diversification
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-cream flex items-center gap-2">
                        <PieChart size={20} className="text-purple-400" />
                        Structure
                      </h3>
                      <div className="space-y-1 text-cream/70 text-sm">
                        <p>
                          <span className="font-semibold">Type:</span> Diversified
                          portfolio
                        </p>
                        <p>
                          <span className="font-semibold">Allocation:</span>{' '}
                          Multiple sectors
                        </p>
                        <p>
                          <span className="font-semibold">Liquidity:</span>{' '}
                          Moderate to Good
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-cream flex items-center gap-2">
                        <Zap size={20} className="text-yellow-400" />
                        Benefits
                      </h3>
                      <div className="space-y-1 text-cream/70 text-sm">
                        <p>Investment flexibility</p>
                        <p>Risk reduction through diversification</p>
                        <p>Professional management</p>
                        <p>Accessibility for all budgets</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-cream">
                    Features
                  </h3>
                  <ul className="space-y-2 text-cream/70 text-sm mb-6 flex-1">
                    <li className="flex gap-2">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span>
                        Flexible monthly or quarterly savings plans
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span>
                        Conversion into professional investment funds
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span>Diversified portfolio of projects</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span>Professional investment management</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span>Minimum amount: $500/month</span>
                    </li>
                  </ul>
                  <Button
                    variant="hero"
                    className="w-full"
                    onClick={() => navigate('/invest')}
                  >
                    Create a Savings Plan{' '}
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Fixed Income */}
            <TabsContent value="fixed">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-gold/20 flex flex-col">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <PieChart className="flex-shrink-0" size={32} />
                    <h2 className="text-3xl font-bold">Fixed Income</h2>
                  </div>
                  <p className="text-lg opacity-90">
                    Secured & Guaranteed Income
                  </p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-cream flex items-center gap-2">
                        <DollarSign size={20} className="text-yellow-400" />
                        Guaranteed Returns
                      </h3>
                      <p className="text-3xl font-bold text-yellow-400 mb-1">
                        5-8%
                      </p>
                      <p className="text-cream/70 text-sm">
                        Fixed guaranteed annual interest rates
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-cream flex items-center gap-2">
                        <LineChart size={20} className="text-blue-400" />
                        Structure
                      </h3>
                      <div className="space-y-1 text-cream/70 text-sm">
                        <p>
                          <span className="font-semibold">Type:</span> Term
                          deposit
                        </p>
                        <p>
                          <span className="font-semibold">Duration:</span> 1-5
                          years based on choice
                        </p>
                        <p>
                          <span className="font-semibold">Liquidity:</span> At
                          maturity
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-cream flex items-center gap-2">
                        <Zap size={20} className="text-yellow-400" />
                        Benefits
                      </h3>
                      <div className="space-y-1 text-cream/70 text-sm">
                        <p>Capital fully secured</p>
                        <p>Predictable returns</p>
                        <p>Zero market volatility</p>
                        <p>Compound interest</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-cream">
                    Features
                  </h3>
                  <ul className="space-y-2 text-cream/70 text-sm mb-6 flex-1">
                    <li className="flex gap-2">
                      <span className="text-yellow-400 font-bold">✓</span>
                      <span>
                        Savings with guaranteed fixed interest rates
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-yellow-400 font-bold">✓</span>
                      <span>Capital fully secured</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-yellow-400 font-bold">✓</span>
                      <span>Interest paid regularly</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-yellow-400 font-bold">✓</span>
                      <span>Ideal for conservative investors</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-yellow-400 font-bold">✓</span>
                      <span>Minimum amount: $5,000</span>
                    </li>
                  </ul>
                  <Button
                    variant="hero"
                    className="w-full"
                    onClick={() => navigate('/invest')}
                  >
                    Invest Securely{' '}
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Which Product Is Right For You?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Consult our experts to find the best investment for your goals
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-10 py-3 text-lg">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default InvestmentProductsPage;
