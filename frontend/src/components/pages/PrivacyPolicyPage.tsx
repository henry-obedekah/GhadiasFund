import { useEffect } from 'react';
import { Button } from '../ui/button';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-deep-green to-navy text-cream py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20 mb-8">
          <p className="text-sm text-cream/70 mb-6">
            Last Updated: November 2026
          </p>

          <div className="space-y-6 text-sm leading-relaxed">
            <p>
              GHADIAS Investment Fund Limited ("GHADIAS," "we," "our," or "us")
              is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, and safeguard your information when
              you visit our website or use our investment services.
            </p>

            <section>
              <h2 className="text-xl font-bold mb-3 text-gold">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                We collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-cream/80">
                <li>
                  Personal information: name, email address, phone number,
                  country of residence
                </li>
                <li>
                  Investment information: investment preferences, product
                  interests, investment amounts
                </li>
                <li>
                  Technical information: IP address, browser type, device
                  information
                </li>
                <li>
                  Communication information: messages, inquiries, and support
                  requests
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-gold">
                2. How We Use Your Information
              </h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-cream/80">
                <li>Process investment enquiries and applications</li>
                <li>Provide customer support and respond to your inquiries</li>
                <li>
                  Send you relevant information about investment opportunities
                </li>
                <li>Improve our website and services</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-gold">
                3. Data Security
              </h2>
              <p className="text-cream/80">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-gold">
                4. Your Rights
              </h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-cream/80">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>
                  Request deletion of your personal information (subject to
                  legal obligations)
                </li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-gold">
                5. Contact Us
              </h2>
              <p className="text-cream/80 mb-4">
                If you have questions about this Privacy Policy or our data
                practices, please contact us at:
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

export default PrivacyPolicyPage;
