import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  Star,
  Users,
  TrendingUp,
  Shield,
  Flag,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../../config/emailjs';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

const faqs = [
  {
    q: 'Who can invest with GHADIAS?',
    a: "GHADIAS is open to Ghanaians in the Diaspora, Ghanaian residents, and any African or international investor interested in Ghana's development. We welcome individuals, institutions, and corporate investors.",
  },
  {
    q: 'What is the minimum investment amount?',
    a: "Minimum investment amounts vary by product. For the Pioneer Program, the minimum is $1,000. Please contact our investor relations team for detailed information on each fund's requirements.",
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
];

export function InvestmentEnquiryPage() {
  const [enquiryType, setEnquiryType] = useState<'standard' | 'pioneer' | null>(null);
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
  const [pioneerForm, setPioneerForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    investmentAmount: '',
    investmentTimeline: '',
    experience: '',
    motivation: '',
    questions: '',
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
        country: standardForm.country === 'Other' ? standardForm.otherCountry : standardForm.country,
        product: standardForm.product,
        amount: standardForm.amount,
        message: standardForm.message,
        to_name: 'GHADIAS Team',
        enquiry_type: 'Standard Investment Enquiry',
      };

      await emailjs.send(
        emailjsConfig.SERVICE_ID,
        emailjsConfig.TEMPLATE_ID,
        templateParams,
        emailjsConfig.PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your enquiry. Please try again or contact us directly.');
    }
  };

  const handlePioneerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: `${pioneerForm.firstName} ${pioneerForm.lastName}`,
        from_email: pioneerForm.email,
        phone: pioneerForm.phone,
        country: pioneerForm.country,
        investment_amount: pioneerForm.investmentAmount,
        investment_timeline: pioneerForm.investmentTimeline,
        experience: pioneerForm.experience,
        motivation: pioneerForm.motivation,
        questions: pioneerForm.questions,
        to_name: 'GHADIAS Team',
        enquiry_type: 'Pioneer Investor Application - First 100',
      };

      await emailjs.send(
        emailjsConfig.SERVICE_ID,
        emailjsConfig.TEMPLATE_ID_ONBOARDING,
        templateParams,
        emailjsConfig.PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your application. Please try again or contact us directly.');
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
                {enquiryType === 'pioneer' ? 'Pioneer Application Received!' : 'Enquiry Received!'}
              </h1>
              <p className="text-lg mb-6 text-cream/90">
                {enquiryType === 'pioneer'
                  ? 'Thank you for your interest in joining the First 100 Pioneer Investors. Our team will contact you within 48 hours with next steps.'
                  : 'Thank you for your investment enquiry. Our investor relations team will contact you within 24 hours to discuss the next steps.'}
              </p>
              <p className="text-cream/80 mb-8">
                {enquiryType === 'pioneer'
                  ? 'You are one step closer to becoming a pioneer investor in GHADIAS!'
                  : 'We look forward to helping you invest in Ghana\'s future.'}
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
            Choose your investment path and start your journey with GHADIAS today.
          </p>
        </div>
      </section>

      {/* Enquiry Type Selection */}
      {!enquiryType && (
        <section className="py-12 px-4 bg-cream/10 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-cream">
              Choose Your Investment Path
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Standard Investor */}
              <div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20 hover:bg-white/20 transition-all cursor-pointer flex flex-col"
                onClick={() => setEnquiryType('standard')}
              >
                <div className="text-center flex-1 flex flex-col">
                  <TrendingUp className="w-16 h-16 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-cream">
                    Standard Investor
                  </h3>
                  <p className="text-cream/70 text-sm mb-6">
                    Regular investment enquiry with flexible options and professional guidance.
                  </p>
                  <ul className="text-left text-cream/60 text-sm space-y-2 mb-6 flex-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-gold" />
                      Flexible investment amounts
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
                  <Button variant="hero" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>

              {/* Pioneer Investor */}
              <div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-gold/40 hover:bg-white/20 transition-all cursor-pointer relative overflow-hidden flex flex-col"
                onClick={() => setEnquiryType('pioneer')}
              >
                <div className="absolute top-4 right-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                  LIMITED
                </div>
                <div className="text-center flex-1 flex flex-col">
                  <Star className="w-16 h-16 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gold">
                    Pioneer Investor
                  </h3>
                  <p className="text-cream/70 text-sm mb-6">
                    Join the First 100 Pioneer Investors with exclusive benefits and founding member status.
                  </p>
                  <ul className="text-left text-cream/60 text-sm space-y-2 mb-6 flex-1">
                    <li className="flex items-center gap-2">
                      <Star size={16} className="text-gold" />
                      Founding member status
                    </li>
                    <li className="flex items-center gap-2">
                      <Star size={16} className="text-gold" />
                      Special investment terms
                    </li>
                    <li className="flex items-center gap-2">
                      <Star size={16} className="text-gold" />
                      Priority access to opportunities
                    </li>
                  </ul>
                  <Button variant="hero" className="w-full">
                    Join First 100
                  </Button>
                </div>
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
                Fill in your details and our investor relations team will contact you within 24 hours.
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
                    onChange={(e) => setStandardForm({ ...standardForm, firstName: e.target.value })}
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
                    onChange={(e) => setStandardForm({ ...standardForm, lastName: e.target.value })}
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
                    onChange={(e) => setStandardForm({ ...standardForm, email: e.target.value })}
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
                    onChange={(e) => setStandardForm({ ...standardForm, phone: e.target.value })}
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
                    onChange={(e) => setStandardForm({ ...standardForm, country: e.target.value })}
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
                      onChange={(e) => setStandardForm({ ...standardForm, otherCountry: e.target.value })}
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
                    onChange={(e) => setStandardForm({ ...standardForm, product: e.target.value })}
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
                <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  Investment Amount Range
                </Label>
                <select
                  className="w-full px-4 py-3 bg-white/10 border border-gold/20 rounded-lg text-sm text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold backdrop-blur-sm"
                  value={standardForm.amount}
                  onChange={(e) => setStandardForm({ ...standardForm, amount: e.target.value })}
                >
                  <option value="" className="text-navy">
                    Select range
                  </option>
                  <option className="text-navy">$1,000 (Standard Pioneer)</option>
                  <option className="text-navy">$2,500 (Enhanced Pioneer)</option>
                  <option className="text-navy">$5,000 (Premium Pioneer)</option>
                  <option className="text-navy">$10,000 (Elite Pioneer)</option>
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
                  onChange={(e) => setStandardForm({ ...standardForm, message: e.target.value })}
                  placeholder="Tell us about your investment goals, questions, or any specific information you need..."
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  id="agree-standard"
                  checked={standardForm.agree}
                  onChange={(e) => setStandardForm({ ...standardForm, agree: e.target.checked })}
                  className="mt-0.5 shrink-0"
                />
                <label
                  htmlFor="agree-standard"
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
              <Button
                type="submit"
                variant="hero"
                className="w-full"
              >
                Submit Investment Enquiry
              </Button>
            </form>
          </div>
        </section>
      )}

      {/* Pioneer Investor Form */}
      {enquiryType === 'pioneer' && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <button
                onClick={() => setEnquiryType(null)}
                className="text-gold text-sm hover:underline mb-4 inline-block"
              >
                ← Back to selection
              </button>
              <div className="flex items-center gap-2 mb-2">
                <Flag className="w-8 h-8 text-gold" />
                <h2 className="text-3xl font-bold text-gold">Join the First 100 Pioneer Investors!</h2>
              </div>
              <p className="text-cream/80 text-sm max-w-3xl">
                We're excited to announce that Ghadias is officially registered in Ghana 
                and we are now at the onboarding stage for our pioneer investors.
              </p>
            </div>

            {/* Pioneer Benefits */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20 mb-8">
              <h3 className="text-xl font-bold mb-4 text-gold flex items-center gap-2">
                <Star className="w-5 h-5" />
                Pioneer Investor Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <Users className="text-gold flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1 text-cream text-sm">Founding Member Status</h4>
                    <p className="text-cream/70 text-xs">Be part of the founding team shaping GHADIAS's future</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <TrendingUp className="text-gold flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1 text-cream text-sm">Early Investment Terms</h4>
                    <p className="text-cream/70 text-xs">Special terms for first 100 investors</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Shield className="text-gold flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1 text-cream text-sm">Priority Access</h4>
                    <p className="text-cream/70 text-xs">First access to new investment opportunities</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-gold flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1 text-cream text-sm">Direct Impact</h4>
                    <p className="text-cream/70 text-xs">Direct influence on fund strategy and governance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Details */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-gold/20 mb-8">
              <h3 className="text-lg font-bold mb-3 text-gold">Investment Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-gold mb-1">100</div>
                  <p className="text-cream/70 text-xs">Pioneer Slots Available</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-gold mb-1">$1,000</div>
                  <p className="text-cream/70 text-xs">Starting Investment</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-gold mb-1">8-15%</div>
                  <p className="text-cream/70 text-xs">Expected Annual Returns</p>
                </div>
              </div>
            </div>

            <form onSubmit={handlePioneerSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    First Name *
                  </Label>
                  <Input
                    required
                    value={pioneerForm.firstName}
                    onChange={(e) => setPioneerForm({ ...pioneerForm, firstName: e.target.value })}
                    className="bg-white/10 border-gold/30 text-cream placeholder:text-cream/50"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Last Name *
                  </Label>
                  <Input
                    required
                    value={pioneerForm.lastName}
                    onChange={(e) => setPioneerForm({ ...pioneerForm, lastName: e.target.value })}
                    className="bg-white/10 border-gold/30 text-cream placeholder:text-cream/50"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Email Address *
                  </Label>
                  <Input
                    required
                    type="email"
                    value={pioneerForm.email}
                    onChange={(e) => setPioneerForm({ ...pioneerForm, email: e.target.value })}
                    className="bg-white/10 border-gold/30 text-cream placeholder:text-cream/50"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Phone Number *
                  </Label>
                  <Input
                    required
                    value={pioneerForm.phone}
                    onChange={(e) => setPioneerForm({ ...pioneerForm, phone: e.target.value })}
                    className="bg-white/10 border-gold/30 text-cream placeholder:text-cream/50"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div>
                <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  Country of Residence *
                </Label>
                <Input
                  required
                  value={pioneerForm.country}
                  onChange={(e) => setPioneerForm({ ...pioneerForm, country: e.target.value })}
                  className="bg-white/10 border-gold/30 text-cream placeholder:text-cream/50"
                  placeholder="Your country"
                />
              </div>

              <div>
                <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  Investment Amount *
                </Label>
                <select
                  required
                  className="w-full bg-white/10 border-gold/30 text-cream rounded-md px-3 py-2"
                  value={pioneerForm.investmentAmount}
                  onChange={(e) => setPioneerForm({ ...pioneerForm, investmentAmount: e.target.value })}
                >
                  <option value="">Select amount</option>
                  <option value="1000">$1,000 (Standard Pioneer)</option>
                  <option value="2500">$2,500 (Enhanced Pioneer)</option>
                  <option value="5000">$5,000 (Premium Pioneer)</option>
                  <option value="10000">$10,000 (Elite Pioneer)</option>
                  <option value="other">Other amount</option>
                </select>
              </div>

              <div>
                <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  Investment Timeline *
                </Label>
                <select
                  required
                  className="w-full bg-white/10 border-gold/30 text-cream rounded-md px-3 py-2"
                  value={pioneerForm.investmentTimeline}
                  onChange={(e) => setPioneerForm({ ...pioneerForm, investmentTimeline: e.target.value })}
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (within 1 month)</option>
                  <option value="short">Short term (1-3 months)</option>
                  <option value="medium">Medium term (3-6 months)</option>
                  <option value="long">Long term (6+ months)</option>
                </select>
              </div>

              <div>
                <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  Investment Experience
                </Label>
                <Textarea
                  value={pioneerForm.experience}
                  onChange={(e) => setPioneerForm({ ...pioneerForm, experience: e.target.value })}
                  className="bg-white/10 border-gold/30 text-cream placeholder:text-cream/50"
                  placeholder="Briefly describe your investment experience..."
                  rows={3}
                />
              </div>

              <div>
                <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  Why do you want to join GHADIAS? *
                </Label>
                <Textarea
                  required
                  value={pioneerForm.motivation}
                  onChange={(e) => setPioneerForm({ ...pioneerForm, motivation: e.target.value })}
                  className="bg-white/10 border-gold/30 text-cream placeholder:text-cream/50"
                  placeholder="Tell us what motivates you to become a pioneer investor..."
                  rows={4}
                />
              </div>

              <div>
                <Label className="text-cream text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  Any Questions?
                </Label>
                <Textarea
                  value={pioneerForm.questions}
                  onChange={(e) => setPioneerForm({ ...pioneerForm, questions: e.target.value })}
                  className="bg-white/10 border-gold/30 text-cream placeholder:text-cream/50"
                  placeholder="Feel free to ask any questions you may have..."
                  rows={3}
                />
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-cream/80 text-xs mb-4">
                  By submitting this form, you agree to be contacted by the GHADIAS team regarding your pioneer investor application.
                </p>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    id="agree-pioneer"
                    checked={pioneerForm.agree}
                    onChange={(e) => setPioneerForm({ ...pioneerForm, agree: e.target.checked })}
                    className="mt-0.5 shrink-0"
                  />
                  <label
                    htmlFor="agree-pioneer"
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
                    Ghana-registered entity. This application does not constitute a
                    binding investment commitment.
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                className="w-full"
              >
                Submit Pioneer Application
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg border border-gold/20"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-4 flex justify-between items-center"
                >
                  <span className="text-cream font-semibold text-sm">{faq.q}</span>
                  <ChevronDown
                    className={`text-gold transition-transform flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4">
                    <p className="text-cream/70 text-xs leading-relaxed">{faq.a}</p>
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