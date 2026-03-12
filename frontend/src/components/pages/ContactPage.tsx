import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Download,
  Calendar,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';

const faqs = [
  {
    q: 'Who can invest with GHADIAS?',
    a: "GHADIAS is open to Ghanaians in the Diaspora, Ghanaian residents, and any African or international investor interested in Ghana's development. We welcome individuals, institutions, and corporate investors.",
  },
  {
    q: 'What is the minimum investment amount?',
    a: "Minimum investment amounts vary by product. Please contact our investor relations team or request the investment prospectus for detailed information on each fund's requirements.",
  },
  {
    q: 'How are my funds protected?',
    a: 'All funds are held in segregated accounts under the oversight of the Board of Directors and Audit Committee. GHADIAS operates under Ghana Companies Act (Act 992) with full regulatory compliance and independent auditing.',
  },
  {
    q: 'How often will I receive returns?',
    a: 'Return frequency varies by product. The Fixed Income Fund offers regular (monthly/quarterly) income payments, while the Impact Fund and Growth Fund provide annual distributions alongside capital appreciation.',
  },
  {
    q: 'Can I withdraw my investment early?',
    a: "Liquidity terms are outlined in each fund's prospectus. Generally, fixed income products have defined maturity periods, while equity-based investments have lock-in periods aligned with project timelines.",
  },
  {
    q: 'Is GHADIAS regulated?',
    a: 'GHADIAS Investment Fund Limited is a Ghana-registered limited liability company (Reg. No. CS023900226, TIN: C0066826144). We operate under applicable Ghanaian financial regulations and are committed to full compliance with all regulatory requirements.',
  },
  {
    q: 'How can I track my investment performance?',
    a: 'Investors receive quarterly performance reports, access to an investor portal, and annual general meeting participation rights. Our investor relations team is always available for updates.',
  },
];

export function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    product: '',
    amount: '',
    message: '',
    source: '',
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-deep-green to-navy">
      {/* Hero */}
      <section className="py-24 px-4">
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
            Register your investment interest, request the investor pack, or
            schedule a consultation with our team.
          </p>
        </div>
      </section>

      {/* Action Cards */}
      <section className="py-12 px-4 bg-cream/10 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: CheckCircle2,
              title: 'Become a Shareholder',
              desc: 'Register your investment interest and take the first step to ownership.',
              btn: 'Register Below',
              color: 'from-navy to-deep-green',
            },
            {
              icon: Download,
              title: 'Request Investor Pack',
              desc: 'Receive our comprehensive investment prospectus and product brochures.',
              btn: 'Request Pack',
              color: 'from-gold to-yellow-300',
            },
            {
              icon: Calendar,
              title: 'Schedule Consultation',
              desc: 'Book a one-on-one session with one of our investment advisors.',
              btn: 'Book a Call',
              color: 'from-blue-400 to-blue-500',
            },
          ].map(({ icon: Icon, title, desc, btn, color }) => (
            <div
              key={title}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-gold/20 text-center hover:bg-white/20 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-br text-white">
                <Icon size={24} />
              </div>
              <h3
                className="text-cream mb-2 font-playfair-display font-bold"
                style={{ fontSize: '1.05rem' }}
              >
                {title}
              </h3>
              <p className="text-cream/60 text-sm mb-4">{desc}</p>
              <button
                className={`w-full py-2.5 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90 bg-gradient-to-r ${color}`}
              >
                {btn}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Form + Contact Info */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2
              className="text-cream mb-2 font-playfair-display font-bold"
              style={{ fontSize: '1.8rem' }}
            >
              Investor Registration Form
            </h2>
            <p className="text-cream/60 text-sm mb-8">
              Fill in your details and our investor relations team will contact
              you within 24 hours.
            </p>

            {submitted ? (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 text-center border border-gold/20">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-gold" />
                </div>
                <h3
                  className="text-cream mb-2 font-playfair-display font-bold"
                  style={{ fontSize: '1.3rem' }}
                >
                  Registration Received!
                </h3>
                <p className="text-cream/60 text-sm">
                  Thank you for registering your interest with GHADIAS. Our
                  investor relations team will contact you within 24 hours to
                  discuss the next steps.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-gold text-sm font-semibold hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      First Name *
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-gold/20 rounded-lg text-sm text-cream placeholder-cream/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold backdrop-blur-sm"
                      value={form.firstName}
                      onChange={(e) =>
                        setForm({ ...form, firstName: e.target.value })
                      }
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Last Name *
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-gold/20 rounded-lg text-sm text-cream placeholder-cream/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold backdrop-blur-sm"
                      value={form.lastName}
                      onChange={(e) =>
                        setForm({ ...form, lastName: e.target.value })
                      }
                      placeholder="Asante"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-gold/20 rounded-lg text-sm text-cream placeholder-cream/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold backdrop-blur-sm"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white/10 border border-gold/20 rounded-lg text-sm text-cream placeholder-cream/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold backdrop-blur-sm"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="+44 7700 000000"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Country of Residence *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-gold/20 rounded-lg text-sm text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold backdrop-blur-sm"
                      value={form.country}
                      onChange={(e) =>
                        setForm({ ...form, country: e.target.value })
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
                  <div>
                    <label className="block text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Investment Product *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-gold/20 rounded-lg text-sm text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold backdrop-blur-sm"
                      value={form.product}
                      onChange={(e) =>
                        setForm({ ...form, product: e.target.value })
                      }
                    >
                      <option value="" className="text-navy">
                        Select product
                      </option>
                      <option className="text-navy">
                        Impact Fund (Equity Investment)
                      </option>
                      <option className="text-navy">Growth Fund</option>
                      <option className="text-navy">Fixed Income Fund</option>
                      <option className="text-navy">
                        Not sure — seeking advice
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Investment Amount Range
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-white/10 border border-gold/20 rounded-lg text-sm text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold backdrop-blur-sm"
                    value={form.amount}
                    onChange={(e) =>
                      setForm({ ...form, amount: e.target.value })
                    }
                  >
                    <option value="" className="text-navy">
                      Select range
                    </option>
                    <option className="text-navy">Under $5,000</option>
                    <option className="text-navy">$5,000 – $25,000</option>
                    <option className="text-navy">$25,000 – $100,000</option>
                    <option className="text-navy">$100,000 – $500,000</option>
                    <option className="text-navy">$500,000+</option>
                    <option className="text-navy">Prefer not to say</option>
                  </select>
                </div>
                <div>
                  <label className="block text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Your Message / Questions
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-gold/20 rounded-lg text-sm text-cream placeholder-cream/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold backdrop-blur-sm resize-none"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us about your investment goals, questions, or any specific information you need..."
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    id="agree"
                    checked={form.agree}
                    onChange={(e) =>
                      setForm({ ...form, agree: e.target.checked })
                    }
                    className="mt-0.5 shrink-0"
                  />
                  <label
                    htmlFor="agree"
                    className="text-cream/60 text-xs leading-relaxed"
                  >
                    I confirm that I have read and agree to the{' '}
                    <a href="#" className="text-gold underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-gold underline">
                      Terms of Use
                    </a>
                    . I understand that investing involves risk and that GHADIAS
                    Investment Fund Limited (Reg. No. CS023900226) is a
                    Ghana-registered entity. This enquiry does not constitute a
                    binding investment commitment.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold to-yellow-300 hover:from-gold/90 hover:to-yellow-300/90 text-navy py-4 rounded-lg font-semibold text-sm transition-colors"
                >
                  Submit Investment Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-6 border border-gold/20">
              <h3
                className="text-cream mb-6 font-playfair-display font-bold"
                style={{ fontSize: '1.2rem' }}
              >
                Contact Information
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: MapPin,
                    label: 'Head Office',
                    val: 'GHADIAS Investment Fund Limited\nAccra, Ghana',
                  },
                  { icon: Phone, label: 'Phone', val: '+233 (0) 200 000 000' },
                  { icon: Mail, label: 'Email', val: 'invest@ghadias.com' },
                  { icon: Globe, label: 'Website', val: 'www.ghadias.com' },
                ].map(({ icon: Icon, label, val }) => (
                  <div key={label} className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gold/20 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-cream/60 text-xs">{label}</p>
                      <p className="text-cream text-sm whitespace-pre-line">
                        {val}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-gold/20">
              <h3
                className="text-cream mb-4 font-playfair-display font-bold"
                style={{ fontSize: '1.1rem' }}
              >
                Investor Login Portal
              </h3>
              <p className="text-cream/60 text-sm mb-5">
                Existing investors can access their portfolio, reports, and
                account documents through our secure portal.
              </p>
              <button className="w-full border-2 border-gold text-gold hover:bg-gold hover:text-navy py-3 rounded-lg text-sm font-semibold transition-all">
                Investor Portal Login
              </button>
              <p className="text-cream/40 text-xs mt-2 text-center">
                Secure SSL-encrypted access
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-cream/5 backdrop-blur-sm" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
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
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-xl border border-gold/20 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-cream text-sm font-semibold pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-gold shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-cream/60 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="py-10 px-4 bg-cream/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-cream/40 text-xs leading-relaxed">
            <strong className="text-cream/60">
              Important Risk Disclosure:
            </strong>{' '}
            GHADIAS Investment Fund Limited (Reg. No. CS023900226, TIN:
            C0066826144) is a Ghana-registered private investment fund.
            Investments are subject to market, credit, and liquidity risks.
            Capital is not guaranteed. Target returns of 8–15% are not
            guaranteed and may vary based on market conditions. Past performance
            does not predict future results. Investors should read the full
            investment prospectus before investing. This website does not
            constitute investment advice. GHADIAS is not intended to collect
            personally identifiable information for regulatory purposes beyond
            investor relations.
          </p>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
