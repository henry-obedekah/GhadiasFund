import { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-gold/20">
              <h2 className="text-2xl font-bold mb-3 text-cream">
                Our Mission
              </h2>
              <p className="text-cream/80 mb-3 leading-relaxed">
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
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-gold/20">
              <h2 className="text-2xl font-bold mb-3 text-cream">Our Vision</h2>
              <p className="text-cream/80 mb-3 leading-relaxed">
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

      {/* Why Choose GHADIAS */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-cream">
            Why Choose GHADIAS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="flex gap-3 p-5 bg-white/10 backdrop-blur-md rounded-xl border border-gold/20"
              >
                <CheckCircle2
                  className="text-gold flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <h3 className="font-bold text-md text-cream mb-1">
                    {item.title}
                  </h3>
                  <p className="text-cream/70 text-sm">{item.description}</p>
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
          <Button variant="hero" className="px-10 py-3 text-lg">
            Schedule an Appointment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
