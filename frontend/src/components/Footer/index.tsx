import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Globe,
} from 'lucide-react';
import ghadiasLogo from '../../assets/images/GhadiasFund.png';

export const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-navy text-cream">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={ghadiasLogo}
                alt="GHADIAS Fund"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-lg object-contain"
              />
              <div>
                <div className="text-lg sm:text-xl md:text-2xl font-playfair-display font-bold">
                  GHADIAS
                </div>
                <div className="text-xs sm:text-sm text-gold">Investment Fund</div>
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mb-4">
              Bridging diaspora capital with Ghana's infrastructure and economic{' '}
              growth.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gold hover:text-cream transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gold hover:text-cream transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gold hover:text-cream transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Navigation & Legal Combined */}
          <div>
            <h3 className="font-playfair-display font-bold text-lg mb-4 text-cream">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <a
                  href="/"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/invest"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  Invest
                </a>
              </li>
            </ul>

            <h3 className="font-playfair-display font-bold text-lg mb-4 text-cream">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/privacy"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info - 2 columns span */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-playfair-display font-bold text-lg mb-4 text-cream">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-1" />
                <div className="text-cream/70">
                  Awo Osei st. 172, Anyaa
                  <br />
                  Accra - Ghana
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Phone size={18} className="text-gold flex-shrink-0 mt-1" />
                <div className="text-cream/70 space-y-1">
                  <a
                    href="tel:+233599884885"
                    className="block hover:text-gold transition-colors"
                  >
                    Ghana: +233 59 988 4885
                  </a>
                  <a
                    href="tel:+32495424821"
                    className="block hover:text-gold transition-colors"
                  >
                    Europe: +32 495 42 48 21
                  </a>
                  <a
                    href="tel:+31624282892"
                    className="block hover:text-gold transition-colors"
                  >
                    Europe: +31 62 428 2892
                  </a>
                  <a
                    href="tel:+16517570003"
                    className="block hover:text-gold transition-colors"
                  >
                    North America: +1 (651) 757-0003
                  </a>
                  <a
                    href="tel:+61410443796"
                    className="block hover:text-gold transition-colors"
                  >
                    Australia: +61 410 443 796
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:investor@ghadiasfund.com"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  investor@ghadiasfund.com
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Globe size={18} className="text-gold flex-shrink-0" />
                <a
                  href="https://www.ghadiasfund.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  www.ghadiasfund.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-4 mb-4" />

        {/* Legal Disclaimer */}
        <div className="bg-navy/50 border border-gold/20 rounded-lg p-4 mb-4">
          <p className="text-xs text-cream/60 leading-relaxed">
            <strong className="text-cream/80">Investment Disclaimer:</strong>{' '}
            Investing involves risk, including possible loss of principal; past{' '}
            performance is not indicative of results. This information is not an
            offer to sell securities in any jurisdiction where unlawful.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20 bg-navy/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-cream/60">
            <p>
              &copy; {currentYear} GHADIAS Investment Fund Limited. All rights{' '}
              reserved.
            </p>
            <p>
              Professional investment fund connecting diaspora to Ghana's{' '}
              future.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
