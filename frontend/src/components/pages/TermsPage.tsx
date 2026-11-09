import { useEffect } from 'react';
import { Button } from '../ui/button';

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-deep-green to-navy text-cream py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Terms & Conditions
        </h1>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20 mb-8">
          <p className="text-sm text-cream/70 mb-6">
            Last Updated: November 2026
          </p>

          <div className="space-y-6 text-sm leading-relaxed">
            <p>
              Welcome to GHADIAS Investment Fund Limited. By accessing our
              website or using our investment services, you agree to comply with
              these Terms & Conditions.
            </p>

            <section>
              <h2 className="text-xl font-bold mb-3 text-gold">
                1. Acceptance of Terms
              </h2>
              <p className="text-cream/80">
                By using our services, you acknowledge that you have read,
                understood, and agree to be bound by these Terms & Conditions
                and our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-gold">
                2. Investment Disclaimer
              </h2>
              <p className="text-cream/80 mb-3">
                <strong>Investment Disclaimer:</strong> Investing involves risk,
                including possible loss of principal; past performance is not
                indicative of results. This information is not an offer to sell
                securities in any jurisdiction where unlawful.
              </p>
              <p className="text-cream/80">
                GHADIAS Investment Fund Limited is a Ghana-registered private
                investment fund. Investments are subject to market, credit, and
                liquidity risks. Capital is not guaranteed. Target returns of
                8–15% are not guaranteed and may vary based on market
                conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-gold">
                3. Eligibility
              </h2>
              <p className="text-cream/80 mb-3">
                You must be at least 18 years old and legally capable of
                entering into contracts to use our investment services. By using
                our services, you represent that you meet these eligibility
                requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-gold">
                4. KYC and Compliance
              </h2>
              <p className="text-cream/80 mb-3">
                All investors are subject to Know Your Customer (KYC)
                verification and Anti-Money Laundering (AML) procedures. You
                agree to provide accurate information and documentation as
                required by applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-gold">
                5. Investment Obligations
              </h2>
              <p className="text-cream/80 mb-3">
                Investment commitments are binding unless otherwise specified in
                the investment agreement. Early withdrawal may be subject to
                penalties or restrictions as outlined in the fund prospectus.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-gold">
                6. Limitation of Liability
              </h2>
              <p className="text-cream/80">
                GHADIAS shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising from your
                use of our services or any investment decisions you make.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-gold">
                7. Intellectual Property
              </h2>
              <p className="text-cream/80">
                All content on this website, including text, graphics, logos,
                and software, is the property of GHADIAS Investment Fund Limited
                and is protected by copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-gold">
                8. Governing Law
              </h2>
              <p className="text-cream/80">
                These Terms & Conditions are governed by the laws of the
                Republic of Ghana. Any disputes shall be resolved in the courts
                of Ghana.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-gold">
                9. Contact Information
              </h2>
              <p className="text-cream/80 mb-4">
                For questions about these Terms & Conditions, please contact us
                at:
              </p>
              <p className="text-gold font-semibold">
                investor@ghadiasfund.com
              </p>
            </section>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button variant="hero" onClick={() => window.history.back()}>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
