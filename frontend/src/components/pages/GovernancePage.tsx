import { useState } from 'react';
import {
  ArrowRight,
  Users,
  Award,
  Globe,
  Shield,
  CheckCircle2,
  Star,
} from 'lucide-react';
import { Button } from '../ui/button';

const GovernancePage = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const boardMembers = [
    {
      name: 'Dr. Kwame Asante',
      title: 'Chairman & CEO',
      bio: 'Former senior executive at Bank of Ghana with 25+ years in financial services and investment management.',
      expertise: 'Banking & Finance',
    },
    {
      name: 'Mrs. Ama Osei',
      title: 'Chief Investment Officer',
      bio: 'Experienced portfolio manager with expertise in emerging markets and diaspora investment strategies.',
      expertise: 'Investment Management',
    },
    {
      name: 'Mr. Kofi Mensah',
      title: 'Chief Risk Officer',
      bio: 'Risk management specialist with background in international banking and regulatory compliance.',
      expertise: 'Risk Management',
    },
  ];

  const advisors = [
    {
      name: 'Prof. Nana Yaa Boateng',
      expertise: 'Economic Development & Policy',
    },
    {
      name: 'Dr. James Wilson',
      expertise: 'International Finance & Diaspora Relations',
    },
    {
      name: 'Ms. Sarah Thompson',
      expertise: 'Legal & Regulatory Compliance',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-deep-green to-navy">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-cream mb-6">
            Governance & Leadership
          </h1>
          <p className="text-xl text-cream/90 mb-8 max-w-3xl mx-auto">
            Meet the experienced team guiding GHADIAS Fund with expertise in
            finance, investment, and African development
          </p>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-cream">
            Board of Directors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-gold/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedMember(member.name)}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-gold to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-6 text-navy font-bold text-2xl">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <h3 className="text-xl font-bold text-cream mb-2">
                  {member.name}
                </h3>
                <p className="text-gold font-semibold mb-3">{member.title}</p>
                <p className="text-cream/70 text-sm leading-relaxed">
                  {member.bio}
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <Star className="text-gold" size={16} fill="currentColor" />
                  <span className="text-gold text-sm">{member.expertise}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-16 px-4 bg-cream/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-cream">
            Advisory Board
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-gold/20"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-6 text-navy font-bold text-xl">
                  {advisor.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <h3 className="text-xl font-bold text-cream mb-2">
                  {advisor.name}
                </h3>
                <p className="text-gold font-semibold">{advisor.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-cream">
            Governance Structure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-gold/20">
              <Globe className="mx-auto mb-4 text-gold" size={40} />
              <h3 className="text-xl font-bold mb-3 text-cream">
                Advisory Board
              </h3>
              <p className="text-cream/70 text-sm">
                Advisory board composed of experts in investment, finance and
                economic development
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-gold/20">
              <Award className="mx-auto mb-4 text-gold" size={40} />
              <h3 className="text-xl font-bold mb-3 text-cream">
                Investment Committee
              </h3>
              <p className="text-cream/70 text-sm">
                Investment committee responsible for approving and monitoring
                projects
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-gold/20">
              <Users className="mx-auto mb-4 text-gold" size={40} />
              <h3 className="text-xl font-bold mb-3 text-cream">
                Compliance Team
              </h3>
              <p className="text-cream/70 text-sm">
                Team dedicated to KYC/AML compliance and risk management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-16 px-4 bg-cream/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-cream">
            Compliance & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20">
              <Shield className="text-gold mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3 text-cream">
                Regulatory Compliance
              </h3>
              <ul className="space-y-2 text-cream/70">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-gold" size={16} />
                  <span>Ghana Companies Act (Act 992) compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-gold" size={16} />
                  <span>Bank of Ghana regulations adherence</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-gold" size={16} />
                  <span>SEC compliance for investment funds</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-gold" size={16} />
                  <span>International best practices implementation</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20">
              <Award className="text-gold mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3 text-cream">
                Certifications & Audits
              </h3>
              <ul className="space-y-2 text-cream/70">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-gold" size={16} />
                  <span>Annual independent financial audits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-gold" size={16} />
                  <span>ISO 9001 Quality Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-gold" size={16} />
                  <span>Anti-Money Laundering (AML) certification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-gold" size={16} />
                  <span>Know Your Customer (KYC) compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gold/20 to-yellow-300/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-cream">
            Trust in Professional Governance
          </h2>
          <p className="text-lg mb-8 text-cream/90 max-w-2xl mx-auto">
            Our experienced leadership team ensures transparent, compliant, and
            professional management of your investments
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-gradient-to-r from-gold to-yellow-300 hover:from-gold/90 hover:to-yellow-300/90 text-navy font-bold px-10 py-4 text-lg">
              Meet Our Team <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              variant="outline"
              className="border-cream text-cream hover:bg-cream hover:text-navy px-8 py-3 text-lg"
            >
              Download Governance Report
            </Button>
          </div>
        </div>
      </section>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-gold/20 max-w-2xl mx-auto max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gold/20">
              <h2 className="text-2xl font-bold text-cream">
                {selectedMember}
              </h2>
              <button
                onClick={() => setSelectedMember(null)}
                className="text-cream/70 hover:text-cream transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              {boardMembers.find((m) => m.name === selectedMember)?.bio}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GovernancePage;
