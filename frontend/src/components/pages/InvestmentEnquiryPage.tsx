import React, { useState, useEffect } from 'react';
import { CheckCircle2, ChevronDown, TrendingUp } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../../config/emailjs';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

const faqs = [
  {
    q: 'GHADIAS Platform Structure',
    a: 'The model separates capital sourcing from investment management, ensuring efficiency, compliance and scalability.\n\nGHADIAS (Sponsor & Distributor): Responsible for investor acquisition, marketing, the digital platform and diaspora engagement. Acts as the primary interface between investors and the Fund.\n\nGCB Bank PLC (Custodian Bank): Holds and protects Fund assets, ensuring transparency and security.\n\nGCB Capital Limited (Ghana) (Licensed Fund Manager): Oversees portfolio construction, investment decisions and ongoing asset management in compliance with regulatory standards.\n\nTrustee / Auditor (Independent Oversight): Provides independent oversight and safeguards investor interests.',
  },
  {
    q: 'Who can invest in GHADIAS?',
    a: 'The platform is designed primarily for:\n\nGhanaian citizens abroad and descendants abroad\nGhanaians and other nationals resident in Ghana\nAfrican Diaspora and descendants in the Caribbean, Americas, Europe and Australia\nDiaspora business collectives\nRetail investors, Institutional investors, associations, groups and institutions\nLong-term savers seeking diversified investment access.\n\n(Participation may be subject to onboarding and compliance requirements.)',
  },
  {
    q: 'What is the minimum investment amount?',
    a: 'Minimum investment thresholds may vary depending on the product or investment plan. GHADIAS aims to make investment participation accessible to retail investors through flexible contribution structures.',
  },
  {
    q: 'What protections are in place for investors?',
    a: 'The Fund structure includes: independent Custodian arrangements, regulated Fund Management, governance oversight, risk management systems, and compliance procedures. Investor protection is a core principle of the platform.',
  },
  {
    q: 'Why invest through GHADIAS instead of directly through a traditional fund manager?',
    a: 'GHADIAS is specifically designed for diaspora and retail investors and combines: investment access, digital convenience, diaspora-focused engagement, recurring savings functionality, investor education, and long-term wealth planning. The platform acts as a trusted gateway connecting diaspora investors to professionally managed investment opportunities.',
  },
];

export function InvestmentEnquiryPage() {
  const [enquiryType, setEnquiryType] = useState<'standard' | null>(null);
  const [standardForm, setStandardForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    otherCountry: '',
    product: '',
    amount: '',
    message: '',
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleStandardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: `${standardForm.firstName} ${standardForm.lastName}`,
        from_email: standardForm.email,
        phone: standardForm.phone,
        country:
          standardForm.country === 'Other'
            ? standardForm.otherCountry
            : standardForm.country,
        product: standardForm.product,
        amount: standardForm.amount,
        message: standardForm.message,
        to_name: 'GHADIAS Team',
        enquiry_type: 'Standard Investments Enquiry',
      };

      await emailjs.send(
        emailjsConfig.SERVICE_ID,
        emailjsConfig.TEMPLATE_ID,
        templateParams,
        emailjsConfig.PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      alert(
        'There was an error sending your enquiry. Please try again or contact us directly.',
      );
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-navy via-deep-green to-navy">
        <section className="py-24 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-gold/20">
              <CheckCircle2 className="w-20 h-20 text-gold mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4 text-gold">
                Enquiry Received!
              </h1>
              <p className="text-lg mb-6 text-cream/90">
                Thank you for your investment enquiry. Our investor relations
                team will contact you within 24 hours to discuss the next steps.
              </p>
              <p className="text-cream/80 mb-8">
                We look forward to helping you invest in Ghana's future.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setEnquiryType(null);
                }}
                className="text-gold text-sm font-semibold hover:underline"
              >
                Submit another enquiry
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-deep-green to-navy">
      {/* Hero */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">
            Get Started
          </span>
          <h1
            className="text-cream mt-3 font-playfair-display font-bold"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Invest Back Home.
            <br />
            Build Wealth. Create Impact.
          </h1>
          <p className="text-cream/70 mt-4 text-sm leading-relaxed max-w-xl mx-auto">
            Choose your investment path and start your journey with GHADIAS
            today.
          </p>
        </div>
      </section>

      {/* Enquiry Type Selection */}
      {!enquiryType && (
        <section className="py-12 px-4 bg-cream/10 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-cream">
              Investment Enquiry
            </h2>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20 hover:bg-white/20 transition-all cursor-pointer">
              <div className="text-center">
                <TrendingUp className="w-16 h-16 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-cream">
                  Retail Investor
                </h3>
                <p className="text-cream/70 text-sm mb-6">
                  Regular investments enquiry with flexible options and
                  professional guidance.
                </p>
                <ul className="text-left text-cream/60 text-sm space-y-2 mb-6 max-w-md mx-auto">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-gold" />
                    Flexible investments amounts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-gold" />
                    Multiple fund options
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-gold" />
                    Professional guidance
                  </li>
                </ul>
                <Button
                  variant="hero"
                  className="w-full max-w-xs mx-auto"
                  onClick={() => setEnquiryType('standard')}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Standard Investor Form */}
      {enquiryType === 'standard' && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <button
                onClick={() => setEnquiryType(null)}
                className="text-gold text-sm hover:underline mb-4 inline-block"
              >
                ← Back to selection
              </button>
              <h2 className="text-3xl font-bold text-cream mb-2">
                Standard Investment Enquiry
              </h2>
              <p className="text-cream/60 text-sm">
                Fill in your details and our investor relations team will
                contact you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleStandardSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    First Name *
                  </Label>
                  <Input
                    required
                    value={standardForm.firstName}
                    onChange={(e) =>
                      setStandardForm({
                        ...standardForm,
                        firstName: e.target.value,
                      })
                    }
                    className="bg-white/10 border-gold/20 text-cream placeholder:text-cream/50"
                    placeholder="John"
                  />
                </div>
                <div>
                  <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Last Name *
                  </Label>
                  <Input
                    required
                    value={standardForm.lastName}
                    onChange={(e) =>
                      setStandardForm({
                        ...standardForm,
                        lastName: e.target.value,
                      })
                    }
                    className="bg-white/10 border-gold/20 text-cream placeholder:text-cream/50"
                    placeholder="Asante"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Email Address *
                  </Label>
                  <Input
                    required
                    type="email"
                    value={standardForm.email}
                    onChange={(e) =>
                      setStandardForm({
                        ...standardForm,
                        email: e.target.value,
                      })
                    }
                    className="bg-white/10 border-gold/20 text-cream placeholder:text-cream/50"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    value={standardForm.phone}
                    onChange={(e) =>
                      setStandardForm({
                        ...standardForm,
                        phone: e.target.value.replace(/[^0-9+\s-]/g, ''),
                      })
                    }
                    className="bg-white/10 border-gold/20 text-cream placeholder:text-cream/50"
                    placeholder="+44 7700 000000"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Country of Residence *
                  </Label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-gold/20 rounded-lg text-sm text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold backdrop-blur-sm"
                    value={standardForm.country}
                    onChange={(e) =>
                      setStandardForm({
                        ...standardForm,
                        country: e.target.value,
                      })
                    }
                  >
                    <option value="" className="text-navy">
                      Select country
                    </option>
                    {[
                      'Ghana',
                      'United Kingdom',
                      'United States',
                      'Canada',
                      'Germany',
                      'Netherlands',
                      'France',
                      'Australia',
                      'Other EU',
                      'Other',
                    ].map((c) => (
                      <option key={c} value={c} className="text-navy">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                {standardForm.country === 'Other' && (
                  <div>
                    <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Please specify your country *
                    </Label>
                    <Input
                      required
                      value={standardForm.otherCountry}
                      onChange={(e) =>
                        setStandardForm({
                          ...standardForm,
                          otherCountry: e.target.value,
                        })
                      }
                      className="bg-white/10 border-gold/20 text-cream placeholder:text-cream/50"
                      placeholder="Enter your country name"
                    />
                  </div>
                )}
                <div>
                  <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Investment Product *
                  </Label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-gold/20 rounded-lg text-sm text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold backdrop-blur-sm"
                    value={standardForm.product}
                    onChange={(e) =>
                      setStandardForm({
                        ...standardForm,
                        product: e.target.value,
                      })
                    }
                  >
                    <option value="" className="text-navy">
                      Select product
                    </option>
                    <option className="text-navy">
                      Heritage Growth Fund (Equity Investment)
                    </option>
                    <option className="text-navy">Evergreen Growth Fund</option>
                    <option className="text-navy">Anchor Wealth Fund</option>
                    <option className="text-navy">
                      Not sure — seeking advice
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  Investment Amount Range
                </Label>
                <select
                  className="w-full px-4 py-3 bg-white/10 border border-gold/20 rounded-lg text-sm text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold backdrop-blur-sm"
                  value={standardForm.amount}
                  onChange={(e) =>
                    setStandardForm({ ...standardForm, amount: e.target.value })
                  }
                >
                  <option value="" className="text-navy">
                    Select range
                  </option>
                  <option className="text-navy">$1,000 – $5,000</option>
                  <option className="text-navy">$5,000 – $10,000</option>
                  <option className="text-navy">$10,000 – $25,000</option>
                  <option className="text-navy">$25,000 – $100,000</option>
                  <option className="text-navy">$100,000+</option>
                  <option className="text-navy">Prefer not to say</option>
                </select>
              </div>
              <div>
                <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  Your Message / Questions
                </Label>
                <Textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-gold/20 rounded-lg text-sm text-cream placeholder:text-cream/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold backdrop-blur-sm resize-none"
                  value={standardForm.message}
                  onChange={(e) =>
                    setStandardForm({
                      ...standardForm,
                      message: e.target.value,
                    })
                  }
                  placeholder="Tell us about your investment goals, questions, or any specific information you need..."
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  id="agree-standard"
                  checked={standardForm.agree}
                  onChange={(e) =>
                    setStandardForm({
                      ...standardForm,
                      agree: e.target.checked,
                    })
                  }
                  className="mt-0.5 shrink-0"
                />
                <label
                  htmlFor="agree-standard"
                  className="text-cream/60 text-xs leading-relaxed"
                >
                  I confirm that I have read and agree to the{' '}
                  <a href="/privacy" className="text-gold underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms" className="text-gold underline">
                    Terms of Use
                  </a>
                  . I understand that investing involves risk and that GHADIAS
                  Investment Fund Limited (Reg. No. CS023900226) is a
                  Ghana-registered entity. This enquiry does not constitute a
                  binding investment commitment.
                </label>
              </div>
              <Button type="submit" variant="hero" className="w-full">
                Submit Investments Enquiry
              </Button>
            </form>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-12 px-4" id="faq">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">
              FAQ
            </span>
            <h2
              className="text-cream mt-2 font-playfair-display font-bold"
              style={{ fontSize: '2rem' }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg border border-gold/20"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-4 flex justify-between items-center"
                >
                  <span className="text-cream font-semibold text-sm flex-1 pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`text-gold transition-transform flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4">
                    <p className="text-cream/70 text-sm leading-relaxed whitespace-pre-line">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
