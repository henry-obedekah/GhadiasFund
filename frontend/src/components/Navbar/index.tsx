// src/components/Navbar/index.tsx
import * as React from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';

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

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Sectors', path: '/sectors' },
    { label: 'Governance', path: '/governance' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
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
          : 'bg-gradient-to-b from-navy/50 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between w-full">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-3 flex-shrink-0 group"
        >
          <img
            src="/src/assets/images/GhadiasFund.png"
            alt="GHADIAS Fund"
            className="w-28 h-28 rounded-lg object-contain group-hover:scale-110 transition-transform"
          />
        </button>

        {/* Desktop Menu - Right Side */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`transition-colors font-dm-sans font-medium text-sm ${
                isActive(item.path) ? 'text-gold' : 'text-cream hover:text-gold'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="w-px h-6 bg-cream/20 mx-2"></div>
          <Button
            variant="hero"
            size="sm"
            onClick={() => handleNavClick('/products')}
          >
            Invest Now
          </Button>
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
                isActive(item.path)
                  ? 'text-gold bg-gold/10'
                  : 'text-cream hover:text-gold hover:bg-gold/10'
              }`}
            >
              {item.label}
            </button>
          ))}
          <Button
            variant="hero"
            size="sm"
            className="w-full"
            onClick={() => handleNavClick('/products')}
          >
            Invest Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export { Navbar };
