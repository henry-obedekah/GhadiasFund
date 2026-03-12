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

const InvestmentProductsPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-green-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Investment Products
          </h1>
          <p className="text-xl opacity-90">
            Three ways to grow your wealth while impacting Ghana
          </p>
        </div>
      </section>

      {/* Products Comparison */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="impact" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="impact">Impact Fund</TabsTrigger>
              <TabsTrigger value="growth">Growth Fund</TabsTrigger>
              <TabsTrigger value="fixed">Fixed Income</TabsTrigger>
            </TabsList>

            {/* Impact Fund */}
            <TabsContent value="impact" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 text-white">
                      <div className="flex items-center gap-3 mb-4">
                        <Target className="flex-shrink-0" size={32} />
                        <h2 className="text-3xl font-bold">Impact Fund</h2>
                      </div>
                      <p className="text-lg opacity-90">
                        Direct Impact Investments
                      </p>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold mb-4 text-gray-800">
                        Features
                      </h3>
                      <ul className="space-y-3 text-gray-600 mb-8">
                        <li className="flex gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Direct investments in Ghanaian projects</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>
                            Variable returns based on project performance
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Documented and transparent social impact</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Investment horizon: Typically 3-7 years</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Minimum amount: $10,000</span>
                        </li>
                      </ul>
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        Explore Projects{' '}
                        <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                      <DollarSign size={24} className="text-green-600" />
                      Potential Returns
                    </h3>
                    <p className="text-4xl font-bold text-green-600 mb-2">
                      12-20%
                    </p>
                    <p className="text-gray-600">
                      Annualized returns depending on projects
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                      <LineChart size={24} className="text-blue-600" />
                      Structure
                    </h3>
                    <div className="space-y-2 text-gray-600">
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

                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                      <Zap size={24} className="text-yellow-600" />
                      Benefits
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p>💡 Measurable social impact</p>
                      <p>💡 Complete project transparency</p>
                      <p>💡 Strict opportunity selection</p>
                      <p>💡 Regular performance monitoring</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Growth Fund */}
            <TabsContent value="growth" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-white">
                      <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="flex-shrink-0" size={32} />
                        <h2 className="text-3xl font-bold">Growth Fund</h2>
                      </div>
                      <p className="text-lg opacity-90">
                        Flexible & Diversified Savings
                      </p>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold mb-4 text-gray-800">
                        Features
                      </h3>
                      <ul className="space-y-3 text-gray-600 mb-8">
                        <li className="flex gap-2">
                          <span className="text-blue-600 font-bold">✓</span>
                          <span>
                            Flexible monthly or quarterly savings plans
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-blue-600 font-bold">✓</span>
                          <span>
                            Conversion into professional investment funds
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-blue-600 font-bold">✓</span>
                          <span>Diversified portfolio of projects</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-blue-600 font-bold">✓</span>
                          <span>Professional investment management</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-blue-600 font-bold">✓</span>
                          <span>Minimum amount: $500/month</span>
                        </li>
                      </ul>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Create a Savings Plan{' '}
                        <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                      <DollarSign size={24} className="text-blue-600" />
                      Potential Returns
                    </h3>
                    <p className="text-4xl font-bold text-blue-600 mb-2">
                      8-15%
                    </p>
                    <p className="text-gray-600">
                      Annualized returns with diversification
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                      <PieChart size={24} className="text-purple-600" />
                      Structure
                    </h3>
                    <div className="space-y-2 text-gray-600">
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

                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                      <Zap size={24} className="text-yellow-600" />
                      Benefits
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p>💡 Investment flexibility</p>
                      <p>💡 Risk reduction through diversification</p>
                      <p>💡 Professional management</p>
                      <p>💡 Accessibility for all budgets</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Fixed Income */}
            <TabsContent value="fixed" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-8 text-white">
                      <div className="flex items-center gap-3 mb-4">
                        <PieChart className="flex-shrink-0" size={32} />
                        <h2 className="text-3xl font-bold">Fixed Income</h2>
                      </div>
                      <p className="text-lg opacity-90">
                        Secured & Guaranteed Income
                      </p>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold mb-4 text-gray-800">
                        Features
                      </h3>
                      <ul className="space-y-3 text-gray-600 mb-8">
                        <li className="flex gap-2">
                          <span className="text-yellow-600 font-bold">✓</span>
                          <span>
                            Savings with guaranteed fixed interest rates
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-yellow-600 font-bold">✓</span>
                          <span>Capital fully secured</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-yellow-600 font-bold">✓</span>
                          <span>Interest paid regularly</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-yellow-600 font-bold">✓</span>
                          <span>Ideal for conservative investors</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-yellow-600 font-bold">✓</span>
                          <span>Minimum amount: $5,000</span>
                        </li>
                      </ul>
                      <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                        Invest Securely{' '}
                        <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                      <DollarSign size={24} className="text-yellow-600" />
                      Guaranteed Returns
                    </h3>
                    <p className="text-4xl font-bold text-yellow-600 mb-2">
                      5-8%
                    </p>
                    <p className="text-gray-600">
                      Fixed guaranteed annual interest rates
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                      <LineChart size={24} className="text-blue-600" />
                      Structure
                    </h3>
                    <div className="space-y-2 text-gray-600">
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

                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                      <Zap size={24} className="text-yellow-600" />
                      Benefits
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p>💡 Capital fully secured</p>
                      <p>💡 Predictable returns</p>
                      <p>💡 Zero market volatility</p>
                      <p>💡 Compound interest</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Investment Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { number: '1', title: 'Sign Up', desc: 'Create your account' },
              { number: '2', title: 'KYC', desc: 'Identity verification' },
              {
                number: '3',
                title: 'Consultation',
                desc: 'Meet our experts',
              },
              { number: '4', title: 'Selection', desc: 'Choose your funds' },
              { number: '5', title: 'Signature', desc: 'Agreements signed' },
              { number: '6', title: 'Deployment', desc: 'Capital invested' },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 text-center border-2 border-green-200">
                  <div className="w-10 h-10 rounded-full bg-green-600 text-white font-bold flex items-center justify-center mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
                {index < 5 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <ArrowRight size={20} className="text-green-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Product Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gradient-to-r from-blue-900 to-green-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Criteria</th>
                  <th className="px-6 py-4 text-left">Impact Fund</th>
                  <th className="px-6 py-4 text-left">Growth Fund</th>
                  <th className="px-6 py-4 text-left">Fixed Income</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold">Expected Returns</td>
                  <td className="px-6 py-4">12-20%</td>
                  <td className="px-6 py-4">8-15%</td>
                  <td className="px-6 py-4">5-8% (fixed)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Risk Level</td>
                  <td className="px-6 py-4">Moderate-High</td>
                  <td className="px-6 py-4">Moderate</td>
                  <td className="px-6 py-4">Low</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Initial Minimum</td>
                  <td className="px-6 py-4">$10,000</td>
                  <td className="px-6 py-4">$500/month</td>
                  <td className="px-6 py-4">$5,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Time Horizon</td>
                  <td className="px-6 py-4">3-7 years</td>
                  <td className="px-6 py-4">2-5 years</td>
                  <td className="px-6 py-4">1-5 years</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Liquidity</td>
                  <td className="px-6 py-4">Moderate</td>
                  <td className="px-6 py-4">Good</td>
                  <td className="px-6 py-4">At maturity</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Ideal For</td>
                  <td className="px-6 py-4">Impact + Returns</td>
                  <td className="px-6 py-4">Stable growth</td>
                  <td className="px-6 py-4">Conservative</td>
                </tr>
              </tbody>
            </table>
          </div>
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
