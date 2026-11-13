// src/components/Navbar/index.tsx
import * as React from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/images/GhadiasFund.png';

type NavItem = {
  label: string;
  path: string;
  highlight?: boolean;
};

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Invest', path: '/invest', highlight: true },
  ];

  const handleNavClick = (path: string) => {
    if (path === '/' && location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-premium'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between w-full px-4">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-3 flex-shrink-0 group"
        >
          <img
            src={logo}
            alt="GHADIAS Fund"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44 rounded-lg object-contain group-hover:scale-110 transition-transform filter drop-shadow-lg"
          />
        </button>

        {/* Desktop Menu - Right Side */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`transition-colors font-dm-sans font-medium text-sm ${
                item.highlight
                  ? 'bg-gradient-to-r from-gold to-yellow-300 text-navy px-6 py-2 rounded-lg font-bold hover:from-gold/90 hover:to-yellow-300/90'
                  : isActive(item.path)
                    ? 'text-gold'
                    : 'text-cream hover:text-gold'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-cream hover:text-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy/95 backdrop-blur-md border-t border-gold/20 px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors font-dm-sans ${
                item.highlight
                  ? 'bg-gradient-to-r from-gold to-yellow-300 text-navy font-bold'
                  : isActive(item.path)
                    ? 'text-gold bg-gold/10'
                    : 'text-cream hover:text-gold hover:bg-gold/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export { Navbar };
