import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { countryService, PhoneCountry } from '../services/countryService';

interface CountrySearchProps {
  value: string;
  onChange: (country: PhoneCountry) => void;
  placeholder?: string;
  className?: string;
}

export const CountrySearch: React.FC<CountrySearchProps> = ({
  value,
  onChange,
  placeholder = 'Search country...',
  className = '',
}) => {
  const [countries, setCountries] = useState<PhoneCountry[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<PhoneCountry[]>(
    [],
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<PhoneCountry | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [showOtherField, setShowOtherField] = useState(false);
  const [customCountry, setCustomCountry] = useState('');
  const [customPhoneCode, setCustomPhoneCode] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadCountries();
  }, []);

  useEffect(() => {
    if (value && countries.length > 0) {
      const country = countryService.getCountryByCode(value);
      if (country) {
        setSelectedCountry(country);
        setSearchQuery(country.name);
      }
    }
  }, [value, countries]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const loadCountries = async () => {
    try {
      setIsLoading(true);
      console.log('CountrySearch: Loading countries...');
      const loadedCountries = await countryService.loadCountries();
      console.log('CountrySearch: Loaded', loadedCountries.length, 'countries');

      // If API returns no countries, use fallback immediately
      if (loadedCountries.length === 0) {
        console.log('CountrySearch: No countries from API, using fallback...');
        const fallbackCountries = [
          { code: '+233', name: 'Ghana', flag: '🇬🇭', cca2: 'GH' },
          { code: '+44', name: 'United Kingdom', flag: '🇬🇧', cca2: 'GB' },
          { code: '+1', name: 'United States', flag: '🇺🇸', cca2: 'US' },
          { code: '+1', name: 'Canada', flag: '🇨🇦', cca2: 'CA' },
          { code: '+49', name: 'Germany', flag: '🇩🇪', cca2: 'DE' },
          { code: '+33', name: 'France', flag: '🇫🇷', cca2: 'FR' },
          { code: '+39', name: 'Italy', flag: '🇮🇹', cca2: 'IT' },
          { code: '+34', name: 'Spain', flag: '🇪🇸', cca2: 'ES' },
          { code: '+81', name: 'Japan', flag: '🇯🇵', cca2: 'JP' },
          { code: '+86', name: 'China', flag: '🇨🇳', cca2: 'CN' },
          { code: '+91', name: 'India', flag: '🇮🇳', cca2: 'IN' },
          { code: '+55', name: 'Brazil', flag: '🇧🇷', cca2: 'BR' },
          { code: '+27', name: 'South Africa', flag: '🇿🇦', cca2: 'ZA' },
          { code: '+20', name: 'Egypt', flag: '🇪🇬', cca2: 'EG' },
          { code: '+61', name: 'Australia', flag: '🇦🇺', cca2: 'AU' },
          { code: '+', name: 'Other', flag: '🌍', cca2: 'OT' },
        ];
        setCountries(fallbackCountries);
        setFilteredCountries(fallbackCountries);
        console.log(
          'CountrySearch: Set fallback countries to',
          fallbackCountries.length,
          'countries',
        );
      } else {
        setCountries(loadedCountries);
        setFilteredCountries(loadedCountries);
        console.log(
          'CountrySearch: Set filteredCountries to',
          loadedCountries.length,
          'countries',
        );
      }
    } catch (error) {
      console.error('CountrySearch: Error loading countries:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    // Use local search for better performance with custom countries
    if (!query.trim()) {
      setFilteredCountries(countries);
    } else {
      const lowercaseQuery = query.toLowerCase();
      const filtered = countries.filter(
        (country) =>
          country.name.toLowerCase().includes(lowercaseQuery) ||
          country.code.toLowerCase().includes(lowercaseQuery) ||
          country.cca2.toLowerCase().includes(lowercaseQuery),
      );
      setFilteredCountries(filtered);
    }
    setIsOpen(true);
  };

  const handleCountrySelect = (country: PhoneCountry) => {
    if (country.name === 'Other') {
      setShowOtherField(true);
      setSelectedCountry(country);
      setSearchQuery('Other');
      setIsOpen(false);
      // Don't call onChange yet, wait for custom input
    } else {
      setShowOtherField(false);
      setCustomCountry('');
      setCustomPhoneCode('');
      setSelectedCountry(country);
      setSearchQuery(country.name);
      setIsOpen(false);
      onChange(country);
    }
  };

  const handleCustomCountrySubmit = () => {
    if (customCountry.trim() && customPhoneCode.trim()) {
      const customCountryObj: PhoneCountry = {
        code: customPhoneCode.startsWith('+')
          ? customPhoneCode
          : `+${customPhoneCode}`,
        name: customCountry.trim(),
        flag: '🌍',
        cca2: `OT-${Date.now()}`, // Unique key to avoid conflicts
      };

      // Add to countries list at the beginning
      const updatedCountries = [customCountryObj, ...countries];
      setCountries(updatedCountries);
      setFilteredCountries(updatedCountries);

      // Select the custom country
      setSelectedCountry(customCountryObj);
      setSearchQuery(customCountry.trim());
      setShowOtherField(false);
      // Clear form
      setCustomCountry('');
      setCustomPhoneCode('');

      // Notify parent component
      onChange(customCountryObj);

      // Keep dropdown open to show the new country is selected
      setIsOpen(false);
    }
  };

  const handleInputFocus = () => {
    setIsOpen(true);
    if (searchQuery.trim()) {
      const lowercaseQuery = searchQuery.toLowerCase();
      const filtered = countries.filter(
        (country) =>
          country.name.toLowerCase().includes(lowercaseQuery) ||
          country.code.toLowerCase().includes(lowercaseQuery) ||
          country.cca2.toLowerCase().includes(lowercaseQuery),
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(countries);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {selectedCountry ? (
            <span className="text-lg">{selectedCountry.flag}</span>
          ) : (
            <Search size={16} className="text-cream/50" />
          )}
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 bg-white/10 border border-gold/20 rounded-lg text-sm text-cream placeholder-cream/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ChevronDown
            size={16}
            className={`text-cream/50 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      {/* Custom country field for "Other" */}
      {showOtherField && (
        <div className="mt-2 p-4 bg-gold/10 border border-gold/30 rounded-lg backdrop-blur-sm">
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-cream font-semibold mb-2 uppercase tracking-wide">
                Country Name *
              </label>
              <input
                type="text"
                value={customCountry}
                onChange={(e) => setCustomCountry(e.target.value)}
                placeholder="e.g., Monaco, Luxembourg"
                className="w-full h-10 px-3 py-2 bg-navy/50 border border-gold/20 rounded-lg text-sm text-cream placeholder-cream/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold backdrop-blur-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-cream font-semibold mb-2 uppercase tracking-wide">
                Phone Code *
              </label>
              <input
                type="text"
                value={customPhoneCode}
                onChange={(e) => setCustomPhoneCode(e.target.value)}
                placeholder="+377"
                className="w-full h-10 px-3 py-2 bg-navy/50 border border-gold/20 rounded-lg text-sm text-cream placeholder-cream/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold backdrop-blur-sm"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={handleCustomCountrySubmit}
                disabled={!customCountry.trim() || !customPhoneCode.trim()}
                className="flex-1 bg-gradient-to-r from-gold to-yellow-300 text-navy py-3 px-4 rounded-lg text-sm font-semibold hover:from-gold/90 hover:to-yellow-300/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
              >
                Add Country
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowOtherField(false);
                  setCustomCountry('');
                  setCustomPhoneCode('');
                  setSelectedCountry(null);
                  setSearchQuery('');
                }}
                className="flex-1 bg-navy/50 text-cream py-3 px-4 rounded-lg text-sm font-semibold hover:bg-navy/70 transition-all duration-200 border border-gold/20"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <>
          <div className="absolute z-50 w-full mt-1 bg-navy border border-gold/20 rounded-lg shadow-lg max-h-60 overflow-y-auto backdrop-blur-md">
            {isLoading ? (
              <div className="p-4 text-center text-cream/70">
                Loading countries...
              </div>
            ) : filteredCountries.length === 0 ? (
              <div className="p-4 text-center text-cream/70">
                No countries found
              </div>
            ) : (
              <div className="py-1">
                {filteredCountries.map((country) => (
                  <button
                    key={country.cca2}
                    type="button"
                    onClick={() => handleCountrySelect(country)}
                    className="w-full px-4 py-3 text-left hover:bg-gold/10 flex items-center gap-3 transition-colors"
                  >
                    <span className="text-lg">{country.flag}</span>
                    <div className="flex-1">
                      <div className="text-sm text-cream font-medium">
                        {country.name}
                      </div>
                      <div className="text-xs text-cream/60">
                        {country.code}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
