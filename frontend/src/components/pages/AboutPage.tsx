import { Users, Award, Globe, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-deep-green to-navy">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-cream mb-6">
            About GHADIAS
          </h1>
          <p className="text-xl text-cream/90">
            Transforming Ghana's Future Through Strategic Investment
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-cream/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20">
              <h2 className="text-3xl font-bold mb-4 text-cream">
                Our Mission
              </h2>
              <p className="text-cream/80 mb-4 leading-relaxed">
                GHADIAS Investment Fund mobilizes capital from the African
                diaspora to invest in key sectors of Ghana. We believe that
                diaspora capital can be the catalyst for sustainable economic
                development and job creation in Ghana.
              </p>
              <p className="text-cream/80 leading-relaxed">
                Our mission is to create a transparent, secure, and
                impact-focused investment platform that benefits both investors
                and Ghanaian communities.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20">
              <h2 className="text-3xl font-bold mb-4 text-cream">Our Vision</h2>
              <p className="text-cream/80 mb-4 leading-relaxed">
                To become the leading investment manager for the African
                diaspora seeking to contribute to Ghana's economic growth while
                generating competitive financial returns.
              </p>
              <p className="text-cream/80 leading-relaxed">
                We envision a Ghana where diaspora capital finances critical
                infrastructure projects, creates sustainable jobs, and improves
                the quality of life for local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration & Certifications */}
      <section className="py-16 px-4 bg-cream/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-cream">
            Registration & Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20">
              <CheckCircle2 className="text-gold mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2 text-cream">
                Official Registration
              </h3>
              <p className="text-cream/80 mb-4">
                GH. REG. #:{' '}
                <span className="font-bold text-gold">CS023900226</span>
              </p>
              <p className="text-cream/70">
                Legally registered with competent Ghanaian authorities
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20">
              <CheckCircle2 className="text-gold mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2 text-cream">
                Tax Identification Number
              </h3>
              <p className="text-cream/80 mb-4">
                TIN: <span className="font-bold text-gold">C0066826144</span>
              </p>
              <p className="text-cream/70">
                Fully compliant with Ghanaian tax requirements
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20">
              <CheckCircle2 className="text-gold mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2 text-cream">
                International Compliance
              </h3>
              <p className="text-cream/80 mb-4">
                Global financial management standards
              </p>
              <p className="text-cream/70">
                Adherent to GDPR and AML/KYC standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-cream">
            Our Management Team
          </h2>

          {/* Board of Directors */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-cream">
              Board of Directors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Kwesi Owusu',
                  title: 'President & Founder',
                  bio: '30+ years of experience in finance and investment in Africa',
                },
                {
                  name: 'Ama Asante',
                  title: 'Vice President',
                  bio: 'Expert in economic development and investment policy',
                },
                {
                  name: 'Dr. Kofi Mensah',
                  title: 'Chief Financial Officer',
                  bio: 'CPA with banking experience and investment fund management',
                },
              ].map((member) => (
                <div
                  key={member.name}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20"
                >
                  <h4 className="text-xl font-bold mb-1 text-cream">
                    {member.name}
                  </h4>
                  <p className="text-gold font-semibold mb-3">{member.title}</p>
                  <p className="text-cream/70">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fund Managers */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-cream">
              Distinguished Fund Managers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Samuel Boateng',
                  title: 'Impact Fund Manager',
                  bio: 'Specialist in impact investments and sustainable development',
                },
                {
                  name: 'Abena Kofie',
                  title: 'Growth Fund Manager',
                  bio: 'Expert in portfolio management and investment strategies',
                },
              ].map((member) => (
                <div
                  key={member.name}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20"
                >
                  <h4 className="text-xl font-bold mb-1 text-cream">
                    {member.name}
                  </h4>
                  <p className="text-gold font-semibold mb-3">{member.title}</p>
                  <p className="text-cream/70">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Advisors */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-cream">
              Technical Advisors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Prof. Joseph Ansong',
                  expertise: 'Economics & Sustainable Development',
                },
                {
                  name: 'Adjoa Mensah',
                  expertise: 'Compliance & Governance',
                },
              ].map((advisor) => (
                <div
                  key={advisor.name}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20"
                >
                  <h4 className="text-xl font-bold mb-1 text-cream">
                    {advisor.name}
                  </h4>
                  <p className="text-gold font-semibold">{advisor.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-16 px-4 bg-cream/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-cream">
            Governance Structure
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-gold/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Globe className="mx-auto mb-4 text-gold" size={40} />
                <h3 className="text-xl font-bold mb-3 text-cream">
                  Advisory Board
                </h3>
                <p className="text-cream/70 text-sm">
                  Advisory board composed of experts in investment, finance and
                  economic development
                </p>
              </div>
              <div className="text-center">
                <Award className="mx-auto mb-4 text-gold" size={40} />
                <h3 className="text-xl font-bold mb-3 text-cream">
                  Investment Committee
                </h3>
                <p className="text-cream/70 text-sm">
                  Investment committee responsible for approving and monitoring
                  projects
                </p>
              </div>
              <div className="text-center">
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
        </div>
      </section>

      {/* Why Choose GHADIAS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-cream">
            Why Choose GHADIAS?
          </h2>
          <div className="space-y-4">
            {[
              {
                title: 'Local & International Expertise',
                description:
                  'Unique combination of Ghanaian market knowledge and international standards',
              },
              {
                title: 'Total Transparency',
                description:
                  'Detailed reports, complete documentation and real-time access to investment data',
              },
              {
                title: 'Documented Impact',
                description:
                  'Every investment is tracked for its social impact and financial returns',
              },
              {
                title: 'Professional Management',
                description:
                  'Experienced team with proven track record in fund management and impact investing',
              },
              {
                title: 'Security & Compliance',
                description:
                  'Full compliance with Ghanaian and international laws, with robust security protocols',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-gold/20"
              >
                <CheckCircle2
                  className="text-gold flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="font-bold text-lg text-cream mb-1">
                    {item.title}
                  </h3>
                  <p className="text-cream/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-gold/20 to-yellow-300/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-cream">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg mb-8 text-cream/90">
            Contact our team to learn more about investment opportunities
          </p>
          <Button className="bg-gradient-to-r from-gold to-yellow-300 hover:from-gold/90 hover:to-yellow-300/90 text-navy font-bold px-10 py-3 text-lg">
            Schedule an Appointment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
