import {
  Zap,
  Smartphone,
  Building2,
  Leaf,
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
import { useState, useEffect } from 'react';

const SectorsPage = () => {
  const [selectedSector, setSelectedSector] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectors = [
    {
      name: 'Renewable Energy',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      description: 'Solar, hydro and wind energy projects in Ghana',
      details:
        "Invest in sustainable energy sources for Ghana's growing needs.",
      projects: ['Accra Solar Power Plant', 'Tema Wind Park'],
      expectedReturns: '14-18%',
      impact: '50,000+ households electrified',
    },
    {
      name: 'Fintech',
      icon: Smartphone,
      color: 'from-blue-400 to-blue-600',
      description:
        'Digital payment platforms and innovative financial services',
      details:
        'Revolutionize access to financial services in Ghana through technology.',
      projects: ['Mobile Money Plus', 'Trading Platform'],
      expectedReturns: '18-22%',
      impact: '100,000+ active users',
    },
    {
      name: 'Real Estate',
      icon: Building2,
      color: 'from-red-400 to-pink-500',
      description: 'Quality residential and commercial projects',
      details:
        'Contribute to sustainable urban growth in Ghana with quality projects.',
      projects: ['Luxury Residence Cantonments', 'Ridge Commercial Center'],
      expectedReturns: '12-16%',
      impact: '500+ homes created',
    },
    {
      name: 'Agribusiness',
      icon: Leaf,
      color: 'from-green-400 to-green-600',
      description: 'Modern agriculture and food processing',
      details:
        'Modernize the Ghanaian agricultural sector and create added value.',
      projects: ['Kumasi Integrated Farm', 'Cocoa Processing Plant'],
      expectedReturns: '15-19%',
      impact: '5,000+ farmers involved',
    },
    {
      name: 'Logistics',
      icon: Truck,
      color: 'from-purple-400 to-purple-600',
      description: 'Infrastructure and transportation services',
      details: "Improve Ghana's supply chain and logistics.",
      projects: ['Tema Port Logistics Hub', 'Distribution Network'],
      expectedReturns: '11-15%',
      impact: '2,000+ jobs created',
    },
    {
      name: 'Healthcare',
      icon: Heart,
      color: 'from-red-400 to-red-600',
      description: 'Hospitals, clinics and pharmaceutical services',
      details: 'Improve access to quality healthcare services in Ghana.',
      projects: ['Accra Multispecialty Clinic', 'Pharmaceutical Plant'],
      expectedReturns: '13-17%',
      impact: '100,000+ patients served',
    },
    {
      name: 'Oil & Gas',
      icon: Droplet,
      color: 'from-gray-600 to-gray-800',
      description: 'Upstream and downstream petroleum activities',
      details:
        "Capitalize on Ghana's petroleum resources in a sustainable way.",
      projects: ['Coastal Refinery', 'Offshore Services'],
      expectedReturns: '16-20%',
      impact: '3,000+ skilled jobs',
    },
    {
      name: 'Tech Startups',
      icon: Lightbulb,
      color: 'from-cyan-400 to-blue-500',
      description: 'Innovative technology companies',
      details: "Support Ghana's growing innovation ecosystem.",
      projects: ['EdTech Startup', 'App Marketplace'],
      expectedReturns: '20-25%',
      impact: '10,000+ users',
    },
    {
      name: 'SME Financing',
      icon: Briefcase,
      color: 'from-green-500 to-teal-600',
      description: 'Support for small and medium enterprises',
      details: 'Finance Ghanaian SMEs for their growth and development.',
      projects: ['SME Guarantee Fund', 'Acceleration Program'],
      expectedReturns: '12-16%',
      impact: '1,000+ SMEs financed',
    },
    {
      name: 'Education',
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-600',
      description: 'Educational institutions and services',
      details: "Invest in quality education for Ghana's next generation.",
      projects: ['Technology Campus', 'E-Learning Platform'],
      expectedReturns: '10-14%',
      impact: '5,000+ students benefiting',
    },
    {
      name: 'Commodities Trading',
      icon: Boxes,
      color: 'from-orange-500 to-red-600',
      description: 'Trading and monetary instruments',
      details: 'Opportunities in Ghanaian and African commodity markets.',
      projects: ['Exchange Platform', 'Processing Center'],
      expectedReturns: '8-12%',
      impact: 'Regional economic stability',
    },
    {
      name: 'Infrastructure',
      icon: Landmark,
      color: 'from-gray-700 to-gray-900',
      description: 'Roads, bridges and basic infrastructure',
      details: 'Develop critical infrastructure for economic growth.',
      projects: ['Accra-Kumasi Highway', 'Strategic Bridge'],
      expectedReturns: '9-13%',
      impact: '50,000+ people positively affected',
    },
  ];

  const CurrentIcon = sectors[selectedSector].icon;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-green-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Investment Sectors
          </h1>
          <p className="text-xl opacity-90">
            12 key sectors of Ghana offering high-impact investment
            opportunities
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {sectors.map((sector, index) => {
              const IconComponent = sector.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedSector(index)}
                  className={`p-4 rounded-lg transition transform hover:scale-105 ${
                    selectedSector === index
                      ? `bg-gradient-to-br ${sector.color} text-white shadow-lg`
                      : 'bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-800'
                  }`}
                >
                  <IconComponent className="mx-auto mb-2" size={28} />
                  <p className="text-sm font-semibold">{sector.name}</p>
                </button>
              );
            })}
          </div>

          {/* Sector Detail */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div
              className={`bg-gradient-to-r ${sectors[selectedSector].color} text-white p-8`}
            >
              <div className="flex items-center gap-4 mb-4">
                <CurrentIcon size={48} />
                <div>
                  <h2 className="text-4xl font-bold">
                    {sectors[selectedSector].name}
                  </h2>
                  <p className="text-lg opacity-90">
                    {sectors[selectedSector].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    About
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {sectors[selectedSector].details}
                  </p>

                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Current Projects
                  </h3>
                  <div className="space-y-3 mb-8">
                    {sectors[selectedSector].projects.map((project, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-gray-700">{project}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white mb-4">
                    View All Projects
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Returns */}
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8 border-l-4 border-green-600">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                      Expected Returns
                    </h4>
                    <p className="text-4xl font-bold text-green-600 mb-2">
                      {sectors[selectedSector].expectedReturns}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Potential annualized returns
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border-l-4 border-blue-600">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                      Social Impact
                    </h4>
                    <p className="text-2xl font-bold text-blue-600 mb-2">
                      {sectors[selectedSector].impact}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Measurable impact created
                    </p>
                  </div>

                  {/* Key Stats */}
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-8">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="text-yellow-600 font-bold">▸</span>
                        Rapid sector growth
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-yellow-600 font-bold">▸</span>
                        Strong market demand
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-yellow-600 font-bold">▸</span>
                        Proven management expertise
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-yellow-600 font-bold">▸</span>
                        Government support
                      </li>
                    </ul>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Invest in this Sector
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Ghanaian Market Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                $170B
              </div>
              <p className="text-gray-600">Ghana's GDP (2024)</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">6.8%</div>
              <p className="text-gray-600">Average economic growth</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">34M</div>
              <p className="text-gray-600">Ghana's population</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">3rd</div>
              <p className="text-gray-600">Economy of West Africa</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Invest?</h2>
          <p className="text-lg mb-8 opacity-90">
            Discover investment opportunities that match your goals
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-10 py-3 text-lg">
            Explore Opportunities
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SectorsPage;
