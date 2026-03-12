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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={ghadiasLogo}
                alt="GHADIAS Fund"
                className="w-16 h-16 rounded-lg object-contain"
              />
              <div>
                <div className="text-lg font-playfair-display font-bold">
                  GHADIAS
                </div>
                <div className="text-xs text-gold">Investment Fund</div>
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Bridging diaspora capital with Ghana's infrastructure and economic
              growth.
            </p>
            <div className="flex gap-4 mt-6">
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

          {/* Navigation Links */}
          <div>
            <h3 className="font-playfair-display font-bold text-lg mb-6 text-cream">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#sectors"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  Sectors
                </a>
              </li>
              <li>
                <a
                  href="#governance"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  Governance
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-playfair-display font-bold text-lg mb-6 text-cream">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  Risk Disclosure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  Anti-Money Laundering
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair-display font-bold text-lg mb-6 text-cream">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
                <div className="text-cream/70">
                  123 Investment Plaza
                  <br />
                  Accra, Ghana
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+233245123456"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  +233 (0) 245 123 456
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={20} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:info@ghadiasfund.com"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  info@ghadiasfund.com
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Globe size={20} className="text-gold flex-shrink-0" />
                <a
                  href="#"
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  www.ghadiasfund.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-8 mb-8" />

        {/* Legal Disclaimer */}
        <div className="bg-navy/50 border border-gold/20 rounded-lg p-6 mb-8">
          <h4 className="font-playfair-display font-bold text-cream mb-3">
            Legal Disclaimer
          </h4>
          <p className="text-xs text-cream/60 leading-relaxed">
            GHADIAS Investment Fund Limited is a registered investment vehicle.
            This website and its contents do not constitute an offer to sell or
            the solicitation of an offer to buy any securities or financial
            instruments in any jurisdiction. All investments involve risk,
            including potential loss of principal. Past performance does not
            guarantee future results. Please review our full prospectus and risk
            disclosure documents before investing. Reg: CS023900226, TIN:
            C0066826144.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20 bg-navy/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-cream/60">
            <p>
              &copy; {currentYear} GHADIAS Investment Fund Limited. All rights
              reserved.
            </p>
            <p>
              Professional investment fund connecting diaspora to Ghana's
              future.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
