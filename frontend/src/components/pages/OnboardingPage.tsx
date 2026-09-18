import { useState } from 'react';
import { CheckCircle, Star, Users, TrendingUp, Shield, Flag } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../../config/emailjs';

const OnboardingPage = () => {
  const [formData, setFormData] = useState({
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
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        country: formData.country,
        investment_amount: formData.investmentAmount,
        investment_timeline: formData.investmentTimeline,
        experience: formData.experience,
        motivation: formData.motivation,
        questions: formData.questions,
        to_name: 'GHADIAS Team',
      };

      await emailjs.send(
        emailjsConfig.SERVICE_ID,
        emailjsConfig.TEMPLATE_ID_ONBOARDING,
        templateParams,
        emailjsConfig.PUBLIC_KEY
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your application. Please try again or contact us directly.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-navy via-deep-green to-navy text-cream py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-gold/20">
            <CheckCircle className="w-20 h-20 text-gold mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4 text-gold">
              Thank You for Your Interest!
            </h1>
            <p className="text-lg mb-6 text-cream/90">
              Your application has been received. Our team will contact you within 48 hours with next steps.
            </p>
            <p className="text-cream/80 mb-8">
              You are one step closer to becoming a pioneer investor in GHADIAS!
            </p>
            <Button
              className="bg-gradient-to-r from-gold to-yellow-300 hover:from-gold/90 hover:to-yellow-300/90 text-navy font-bold px-8 py-3"
              onClick={() => window.location.href = '/'}
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-deep-green to-navy text-cream py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flag className="w-8 h-8 text-gold" />
            <h1 className="text-4xl font-bold text-gold">GHADIAS – JOIN THE FIRST 100!</h1>
          </div>
          <p className="text-xl text-cream/90 max-w-3xl mx-auto">
            We're excited to announce that Ghadias is officially registered in Ghana 🇬🇭 
            and we are now at the onboarding stage.
          </p>
        </div>

        {/* Pioneer Benefits */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gold flex items-center gap-2">
            <Star className="w-6 h-6" />
            Pioneer Investor Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <Users className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Founding Member Status</h3>
                <p className="text-cream/80 text-sm">Be part of the founding team shaping GHADIAS's future</p>
              </div>
            </div>
            <div className="flex gap-3">
              <TrendingUp className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Early Investment Terms</h3>
                <p className="text-cream/80 text-sm">Special terms for first 100 investors</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Shield className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Priority Access</h3>
                <p className="text-cream/80 text-sm">First access to new investment opportunities</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Direct Impact</h3>
                <p className="text-cream/80 text-sm">Direct influence on fund strategy and governance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Details */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gold">Investment Details</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
              <span className="text-cream/90">Target Investment</span>
              <span className="text-2xl font-bold text-gold">$1,000</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
              <span className="text-cream/90">Pioneer Slots Available</span>
              <span className="text-2xl font-bold text-gold">100</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
              <span className="text-cream/90">Expected Returns</span>
              <span className="text-2xl font-bold text-gold">8-15%</span>
            </div>
          </div>
          <p className="mt-4 text-cream/80 text-sm">
            The fund managers have proposed that with 100 people contributing $1,000 over a short period, 
            the Ghadias fund can take off and grow very quickly. This will help start our operations.
          </p>
        </div>

        {/* Application Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20">
          <h2 className="text-2xl font-bold mb-6 text-gold">Pioneer Investor Application</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-cream">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-gold/30 text-cream placeholder:text-cream/50"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-cream">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-gold/30 text-cream placeholder:text-cream/50"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email" className="text-cream">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-gold/30 text-cream placeholder:text-cream/50"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-cream">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-gold/30 text-cream placeholder:text-cream/50"
                  placeholder="+1 234 567 8900"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="country" className="text-cream">Country of Residence *</Label>
              <Input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="bg-white/10 border-gold/30 text-cream placeholder:text-cream/50"
                placeholder="Your country"
              />
            </div>

            <div>
              <Label htmlFor="investmentAmount" className="text-cream">Investment Amount *</Label>
              <select
                id="investmentAmount"
                name="investmentAmount"
                value={formData.investmentAmount}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border-gold/30 text-cream rounded-md px-3 py-2"
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
              <Label htmlFor="investmentTimeline" className="text-cream">Investment Timeline *</Label>
              <select
                id="investmentTimeline"
                name="investmentTimeline"
                value={formData.investmentTimeline}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border-gold/30 text-cream rounded-md px-3 py-2"
              >
                <option value="">Select timeline</option>
                <option value="immediate">Immediate (within 1 month)</option>
                <option value="short">Short term (1-3 months)</option>
                <option value="medium">Medium term (3-6 months)</option>
                <option value="long">Long term (6+ months)</option>
              </select>
            </div>

            <div>
              <Label htmlFor="experience" className="text-cream">Investment Experience</Label>
              <Textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="bg-white/10 border-gold/30 text-cream placeholder:text-cream/50"
                placeholder="Briefly describe your investment experience..."
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="motivation" className="text-cream">Why do you want to join GHADIAS? *</Label>
              <Textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                required
                className="bg-white/10 border-gold/30 text-cream placeholder:text-cream/50"
                placeholder="Tell us what motivates you to become a pioneer investor..."
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="questions" className="text-cream">Any Questions?</Label>
              <Textarea
                id="questions"
                name="questions"
                value={formData.questions}
                onChange={handleChange}
                className="bg-white/10 border-gold/30 text-cream placeholder:text-cream/50"
                placeholder="Feel free to ask any questions you may have..."
                rows={3}
              />
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-sm text-cream/80 mb-4">
                By submitting this form, you agree to be contacted by the GHADIAS team regarding your pioneer investor application.
              </p>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-gold to-yellow-300 hover:from-gold/90 hover:to-yellow-300/90 text-navy font-bold py-3 text-lg"
              >
                Submit Application
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-cream/80 mb-4">
            For more information about GHADIAS or the onboarding process, please feel free to contact us.
          </p>
          <p className="text-gold font-semibold">
            100 pioneer slots. One opportunity to be part of the beginning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;