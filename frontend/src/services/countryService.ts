export interface Country {
  name: {
    common: string;
    official: string;
  };
  cca2: string;
  cca3: string;
  callingCodes: string[];
  flags: {
    svg: string;
    png: string;
  };
}

export interface PhoneCountry {
  code: string;
  name: string;
  flag: string;
  cca2: string;
}

class CountryService {
  private countries: PhoneCountry[] = [];
  private isLoaded = false;

  async loadCountries(): Promise<PhoneCountry[]> {
    if (this.isLoaded) {
      return this.countries;
    }

    try {
      console.log('Loading countries from comprehensive list...');
      this.countries = this.getComprehensiveCountries();
      this.isLoaded = true;
      console.log('Loaded', this.countries.length, 'countries');
      return this.countries;
    } catch (error) {
      console.error('Error loading countries:', error);
      this.countries = this.getFallbackCountries();
      this.isLoaded = true;
      return this.countries;
    }
  }

  private getComprehensiveCountries(): PhoneCountry[] {
    return [
      { code: '+93', name: 'Afghanistan', flag: '🇦🇫', cca2: 'AF' },
      { code: '+355', name: 'Albania', flag: '🇦🇱', cca2: 'AL' },
      { code: '+213', name: 'Algeria', flag: '🇩🇿', cca2: 'DZ' },
      { code: '+1 684', name: 'American Samoa', flag: '🇦🇸', cca2: 'AS' },
      { code: '+376', name: 'Andorra', flag: '🇦🇩', cca2: 'AD' },
      { code: '+244', name: 'Angola', flag: '🇦🇴', cca2: 'AO' },
      { code: '+1 264', name: 'Anguilla', flag: '🇦🇮', cca2: 'AI' },
      { code: '+672', name: 'Antarctica', flag: '🇦🇶', cca2: 'AQ' },
      { code: '+1 268', name: 'Antigua and Barbuda', flag: '🇦🇬', cca2: 'AG' },
      { code: '+54', name: 'Argentina', flag: '🇦🇷', cca2: 'AR' },
      { code: '+374', name: 'Armenia', flag: '🇦🇲', cca2: 'AM' },
      { code: '+297', name: 'Aruba', flag: '🇦🇼', cca2: 'AW' },
      { code: '+61', name: 'Australia', flag: '🇦🇺', cca2: 'AU' },
      { code: '+43', name: 'Austria', flag: '🇦🇹', cca2: 'AT' },
      { code: '+994', name: 'Azerbaijan', flag: '🇦🇿', cca2: 'AZ' },
      { code: '+1 242', name: 'Bahamas', flag: '🇧🇸', cca2: 'BS' },
      { code: '+973', name: 'Bahrain', flag: '🇧🇭', cca2: 'BH' },
      { code: '+880', name: 'Bangladesh', flag: '🇧🇩', cca2: 'BD' },
      { code: '+1 246', name: 'Barbados', flag: '🇧🇧', cca2: 'BB' },
      { code: '+375', name: 'Belarus', flag: '🇧🇾', cca2: 'BY' },
      { code: '+32', name: 'Belgium', flag: '🇧🇪', cca2: 'BE' },
      { code: '+501', name: 'Belize', flag: '🇧🇿', cca2: 'BZ' },
      { code: '+229', name: 'Benin', flag: '🇧🇯', cca2: 'BJ' },
      { code: '+1 441', name: 'Bermuda', flag: '🇧🇲', cca2: 'BM' },
      { code: '+975', name: 'Bhutan', flag: '🇧🇹', cca2: 'BT' },
      { code: '+591', name: 'Bolivia', flag: '🇧🇴', cca2: 'BO' },
      { code: '+387', name: 'Bosnia and Herzegovina', flag: '🇧🇦', cca2: 'BA' },
      { code: '+267', name: 'Botswana', flag: '🇧🇼', cca2: 'BW' },
      { code: '+55', name: 'Brazil', flag: '🇧🇷', cca2: 'BR' },
      { code: '+246', name: 'British Indian Ocean Territory', flag: '🇮🇴', cca2: 'IO' },
      { code: '+1 284', name: 'British Virgin Islands', flag: '🇻🇬', cca2: 'VG' },
      { code: '+673', name: 'Brunei', flag: '🇧🇳', cca2: 'BN' },
      { code: '+359', name: 'Bulgaria', flag: '🇧🇬', cca2: 'BG' },
      { code: '+226', name: 'Burkina Faso', flag: '🇧🇫', cca2: 'BF' },
      { code: '+257', name: 'Burundi', flag: '🇧🇮', cca2: 'BI' },
      { code: '+855', name: 'Cambodia', flag: '🇰🇭', cca2: 'KH' },
      { code: '+237', name: 'Cameroon', flag: '🇨🇲', cca2: 'CM' },
      { code: '+1', name: 'Canada', flag: '🇨🇦', cca2: 'CA' },
      { code: '+238', name: 'Cape Verde', flag: '🇨🇻', cca2: 'CV' },
      { code: '+1 345', name: 'Cayman Islands', flag: '🇰🇾', cca2: 'KY' },
      { code: '+236', name: 'Central African Republic', flag: '🇨🇫', cca2: 'CF' },
      { code: '+235', name: 'Chad', flag: '🇹🇩', cca2: 'TD' },
      { code: '+56', name: 'Chile', flag: '🇨🇱', cca2: 'CL' },
      { code: '+86', name: 'China', flag: '🇨🇳', cca2: 'CN' },
      { code: '+61', name: 'Christmas Island', flag: '🇨🇽', cca2: 'CX' },
      { code: '+61', name: 'Cocos Islands', flag: '🇨🇨', cca2: 'CC' },
      { code: '+57', name: 'Colombia', flag: '🇨🇴', cca2: 'CO' },
      { code: '+269', name: 'Comoros', flag: '🇰🇲', cca2: 'KM' },
      { code: '+242', name: 'Congo', flag: '🇨🇬', cca2: 'CG' },
      { code: '+243', name: 'Democratic Republic of the Congo', flag: '🇨🇩', cca2: 'CD' },
      { code: '+682', name: 'Cook Islands', flag: '🇨🇰', cca2: 'CK' },
      { code: '+506', name: 'Costa Rica', flag: '🇨🇷', cca2: 'CR' },
      { code: '+385', name: 'Croatia', flag: '🇭🇷', cca2: 'HR' },
      { code: '+53', name: 'Cuba', flag: '🇨🇺', cca2: 'CU' },
      { code: '+599', name: 'Curaçao', flag: '🇨🇼', cca2: 'CW' },
      { code: '+357', name: 'Cyprus', flag: '🇨🇾', cca2: 'CY' },
      { code: '+420', name: 'Czech Republic', flag: '🇨🇿', cca2: 'CZ' },
      { code: '+45', name: 'Denmark', flag: '🇩🇰', cca2: 'DK' },
      { code: '+253', name: 'Djibouti', flag: '🇩🇯', cca2: 'DJ' },
      { code: '+1 767', name: 'Dominica', flag: '🇩🇲', cca2: 'DM' },
      { code: '+1 809', name: 'Dominican Republic', flag: '🇩🇴', cca2: 'DO' },
      { code: '+593', name: 'Ecuador', flag: '🇪🇨', cca2: 'EC' },
      { code: '+20', name: 'Egypt', flag: '🇪🇬', cca2: 'EG' },
      { code: '+503', name: 'El Salvador', flag: '🇸🇻', cca2: 'SV' },
      { code: '+240', name: 'Equatorial Guinea', flag: '🇬🇶', cca2: 'GQ' },
      { code: '+291', name: 'Eritrea', flag: '🇪🇷', cca2: 'ER' },
      { code: '+372', name: 'Estonia', flag: '🇪🇪', cca2: 'EE' },
      { code: '+251', name: 'Ethiopia', flag: '🇪🇹', cca2: 'ET' },
      { code: '+500', name: 'Falkland Islands', flag: '🇫🇰', cca2: 'FK' },
      { code: '+298', name: 'Faroe Islands', flag: '🇫🇴', cca2: 'FO' },
      { code: '+679', name: 'Fiji', flag: '🇫🇯', cca2: 'FJ' },
      { code: '+358', name: 'Finland', flag: '🇫🇮', cca2: 'FI' },
      { code: '+33', name: 'France', flag: '🇫🇷', cca2: 'FR' },
      { code: '+594', name: 'French Guiana', flag: '🇬🇫', cca2: 'GF' },
      { code: '+689', name: 'French Polynesia', flag: '🇵🇫', cca2: 'PF' },
      { code: '+241', name: 'Gabon', flag: '🇬🇦', cca2: 'GA' },
      { code: '+220', name: 'Gambia', flag: '🇬🇲', cca2: 'GM' },
      { code: '+995', name: 'Georgia', flag: '🇬🇪', cca2: 'GE' },
      { code: '+49', name: 'Germany', flag: '🇩🇪', cca2: 'DE' },
      { code: '+233', name: 'Ghana', flag: '🇬🇭', cca2: 'GH' },
      { code: '+350', name: 'Gibraltar', flag: '🇬🇮', cca2: 'GI' },
      { code: '+30', name: 'Greece', flag: '🇬🇷', cca2: 'GR' },
      { code: '+299', name: 'Greenland', flag: '🇬🇱', cca2: 'GL' },
      { code: '+1 473', name: 'Grenada', flag: '🇬🇩', cca2: 'GD' },
      { code: '+590', name: 'Guadeloupe', flag: '🇬🇵', cca2: 'GP' },
      { code: '+1 671', name: 'Guam', flag: '🇬🇺', cca2: 'GU' },
      { code: '+502', name: 'Guatemala', flag: '🇬🇹', cca2: 'GT' },
      { code: '+44', name: 'Guernsey', flag: '🇬🇬', cca2: 'GG' },
      { code: '+224', name: 'Guinea', flag: '🇬🇳', cca2: 'GN' },
      { code: '+245', name: 'Guinea-Bissau', flag: '🇬🇼', cca2: 'GW' },
      { code: '+592', name: 'Guyana', flag: '🇬🇾', cca2: 'GY' },
      { code: '+509', name: 'Haiti', flag: '🇭🇹', cca2: 'HT' },
      { code: '+504', name: 'Honduras', flag: '🇭🇳', cca2: 'HN' },
      { code: '+852', name: 'Hong Kong', flag: '🇭🇰', cca2: 'HK' },
      { code: '+36', name: 'Hungary', flag: '🇭🇺', cca2: 'HU' },
      { code: '+354', name: 'Iceland', flag: '🇮🇸', cca2: 'IS' },
      { code: '+91', name: 'India', flag: '🇮🇳', cca2: 'IN' },
      { code: '+62', name: 'Indonesia', flag: '🇮🇩', cca2: 'ID' },
      { code: '+98', name: 'Iran', flag: '🇮🇷', cca2: 'IR' },
      { code: '+964', name: 'Iraq', flag: '🇮🇶', cca2: 'IQ' },
      { code: '+353', name: 'Ireland', flag: '🇮🇪', cca2: 'IE' },
      { code: '+44', name: 'Isle of Man', flag: '🇮🇲', cca2: 'IM' },
      { code: '+972', name: 'Israel', flag: '🇮🇱', cca2: 'IL' },
      { code: '+39', name: 'Italy', flag: '🇮🇹', cca2: 'IT' },
      { code: '+1 876', name: 'Jamaica', flag: '🇯🇲', cca2: 'JM' },
      { code: '+81', name: 'Japan', flag: '🇯🇵', cca2: 'JP' },
      { code: '+44', name: 'Jersey', flag: '🇯🇪', cca2: 'JE' },
      { code: '+962', name: 'Jordan', flag: '🇯🇴', cca2: 'JO' },
      { code: '+7', name: 'Kazakhstan', flag: '🇰🇿', cca2: 'KZ' },
      { code: '+254', name: 'Kenya', flag: '🇰🇪', cca2: 'KE' },
      { code: '+686', name: 'Kiribati', flag: '🇰🇮', cca2: 'KI' },
      { code: '+383', name: 'Kosovo', flag: '🇽🇰', cca2: 'XK' },
      { code: '+965', name: 'Kuwait', flag: '🇰🇼', cca2: 'KW' },
      { code: '+996', name: 'Kyrgyzstan', flag: '🇰🇬', cca2: 'KG' },
      { code: '+856', name: 'Laos', flag: '🇱🇦', cca2: 'LA' },
      { code: '+371', name: 'Latvia', flag: '🇱🇻', cca2: 'LV' },
      { code: '+961', name: 'Lebanon', flag: '🇱🇧', cca2: 'LB' },
      { code: '+266', name: 'Lesotho', flag: '🇱🇸', cca2: 'LS' },
      { code: '+231', name: 'Liberia', flag: '🇱🇷', cca2: 'LR' },
      { code: '+218', name: 'Libya', flag: '🇱🇾', cca2: 'LY' },
      { code: '+423', name: 'Liechtenstein', flag: '🇱🇮', cca2: 'LI' },
      { code: '+370', name: 'Lithuania', flag: '🇱🇹', cca2: 'LT' },
      { code: '+352', name: 'Luxembourg', flag: '🇱🇺', cca2: 'LU' },
      { code: '+853', name: 'Macau', flag: '🇲🇴', cca2: 'MO' },
      { code: '+389', name: 'North Macedonia', flag: '🇲🇰', cca2: 'MK' },
      { code: '+261', name: 'Madagascar', flag: '🇲🇬', cca2: 'MG' },
      { code: '+265', name: 'Malawi', flag: '🇲🇼', cca2: 'MW' },
      { code: '+60', name: 'Malaysia', flag: '🇲🇾', cca2: 'MY' },
      { code: '+960', name: 'Maldives', flag: '🇲🇻', cca2: 'MV' },
      { code: '+223', name: 'Mali', flag: '🇲🇱', cca2: 'ML' },
      { code: '+356', name: 'Malta', flag: '🇲🇹', cca2: 'MT' },
      { code: '+692', name: 'Marshall Islands', flag: '🇲🇭', cca2: 'MH' },
      { code: '+596', name: 'Martinique', flag: '🇲🇶', cca2: 'MQ' },
      { code: '+222', name: 'Mauritania', flag: '🇲🇷', cca2: 'MR' },
      { code: '+230', name: 'Mauritius', flag: '🇲🇺', cca2: 'MU' },
      { code: '+262', name: 'Mayotte', flag: '🇾🇹', cca2: 'YT' },
      { code: '+52', name: 'Mexico', flag: '🇲🇽', cca2: 'MX' },
      { code: '+691', name: 'Micronesia', flag: '🇫🇲', cca2: 'FM' },
      { code: '+373', name: 'Moldova', flag: '🇲🇩', cca2: 'MD' },
      { code: '+377', name: 'Monaco', flag: '🇲🇨', cca2: 'MC' },
      { code: '+976', name: 'Mongolia', flag: '🇲🇳', cca2: 'MN' },
      { code: '+382', name: 'Montenegro', flag: '🇲🇪', cca2: 'ME' },
      { code: '+1 664', name: 'Montserrat', flag: '🇲🇸', cca2: 'MS' },
      { code: '+212', name: 'Morocco', flag: '🇲🇦', cca2: 'MA' },
      { code: '+258', name: 'Mozambique', flag: '🇲🇿', cca2: 'MZ' },
      { code: '+95', name: 'Myanmar', flag: '🇲🇲', cca2: 'MM' },
      { code: '+264', name: 'Namibia', flag: '🇳🇦', cca2: 'NA' },
      { code: '+674', name: 'Nauru', flag: '🇳🇷', cca2: 'NR' },
      { code: '+977', name: 'Nepal', flag: '🇳🇵', cca2: 'NP' },
      { code: '+31', name: 'Netherlands', flag: '🇳🇱', cca2: 'NL' },
      { code: '+599', name: 'Netherlands Antilles', flag: '🇧🇶', cca2: 'BQ' },
      { code: '+687', name: 'New Caledonia', flag: '🇳🇨', cca2: 'NC' },
      { code: '+64', name: 'New Zealand', flag: '🇳🇿', cca2: 'NZ' },
      { code: '+505', name: 'Nicaragua', flag: '🇳🇮', cca2: 'NI' },
      { code: '+227', name: 'Niger', flag: '🇳🇪', cca2: 'NE' },
      { code: '+234', name: 'Nigeria', flag: '🇳🇬', cca2: 'NG' },
      { code: '+683', name: 'Niue', flag: '🇳🇺', cca2: 'NU' },
      { code: '+672', name: 'Norfolk Island', flag: '🇳🇫', cca2: 'NF' },
      { code: '+850', name: 'North Korea', flag: '🇰🇵', cca2: 'KP' },
      { code: '+1 670', name: 'Northern Mariana Islands', flag: '🇲🇵', cca2: 'MP' },
      { code: '+47', name: 'Norway', flag: '🇳🇴', cca2: 'NO' },
      { code: '+968', name: 'Oman', flag: '🇴🇲', cca2: 'OM' },
      { code: '+92', name: 'Pakistan', flag: '🇵🇰', cca2: 'PK' },
      { code: '+680', name: 'Palau', flag: '🇵🇼', cca2: 'PW' },
      { code: '+507', name: 'Panama', flag: '🇵🇦', cca2: 'PA' },
      { code: '+675', name: 'Papua New Guinea', flag: '🇵🇬', cca2: 'PG' },
      { code: '+595', name: 'Paraguay', flag: '🇵🇾', cca2: 'PY' },
      { code: '+51', name: 'Peru', flag: '🇵🇪', cca2: 'PE' },
      { code: '+63', name: 'Philippines', flag: '🇵🇭', cca2: 'PH' },
      { code: '+48', name: 'Poland', flag: '🇵🇱', cca2: 'PL' },
      { code: '+351', name: 'Portugal', flag: '🇵🇹', cca2: 'PT' },
      { code: '+1 787', name: 'Puerto Rico', flag: '🇵🇷', cca2: 'PR' },
      { code: '+974', name: 'Qatar', flag: '🇶🇦', cca2: 'QA' },
      { code: '+40', name: 'Romania', flag: '🇷🇴', cca2: 'RO' },
      { code: '+7', name: 'Russia', flag: '🇷🇺', cca2: 'RU' },
      { code: '+250', name: 'Rwanda', flag: '🇷🇼', cca2: 'RW' },
      { code: '+590', name: 'Saint Barthélemy', flag: '🇧🇱', cca2: 'BL' },
      { code: '+1 869', name: 'Saint Kitts and Nevis', flag: '🇰🇳', cca2: 'KN' },
      { code: '+1 758', name: 'Saint Lucia', flag: '🇱🇨', cca2: 'LC' },
      { code: '+590', name: 'Saint Martin', flag: '🇲🇫', cca2: 'MF' },
      { code: '+508', name: 'Saint Pierre and Miquelon', flag: '🇵🇲', cca2: 'PM' },
      { code: '+1 784', name: 'Saint Vincent and the Grenadines', flag: '🇻🇨', cca2: 'VC' },
      { code: '+685', name: 'Samoa', flag: '🇼🇸', cca2: 'WS' },
      { code: '+378', name: 'San Marino', flag: '🇸🇲', cca2: 'SM' },
      { code: '+239', name: 'Sao Tome and Principe', flag: '🇸🇹', cca2: 'ST' },
      { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦', cca2: 'SA' },
      { code: '+221', name: 'Senegal', flag: '🇸🇳', cca2: 'SN' },
      { code: '+381', name: 'Serbia', flag: '🇷🇸', cca2: 'RS' },
      { code: '+248', name: 'Seychelles', flag: '🇸🇨', cca2: 'SC' },
      { code: '+232', name: 'Sierra Leone', flag: '🇸🇱', cca2: 'SL' },
      { code: '+65', name: 'Singapore', flag: '🇸🇬', cca2: 'SG' },
      { code: '+1 721', name: 'Sint Maarten', flag: '🇸🇽', cca2: 'SX' },
      { code: '+421', name: 'Slovakia', flag: '🇸🇰', cca2: 'SK' },
      { code: '+386', name: 'Slovenia', flag: '🇸🇮', cca2: 'SI' },
      { code: '+677', name: 'Solomon Islands', flag: '🇸🇧', cca2: 'SB' },
      { code: '+252', name: 'Somalia', flag: '🇸🇴', cca2: 'SO' },
      { code: '+27', name: 'South Africa', flag: '🇿🇦', cca2: 'ZA' },
      { code: '+82', name: 'South Korea', flag: '🇰🇷', cca2: 'KR' },
      { code: '+211', name: 'South Sudan', flag: '🇸🇸', cca2: 'SS' },
      { code: '+34', name: 'Spain', flag: '🇪🇸', cca2: 'ES' },
      { code: '+94', name: 'Sri Lanka', flag: '🇱🇰', cca2: 'LK' },
      { code: '+249', name: 'Sudan', flag: '🇸🇩', cca2: 'SD' },
      { code: '+597', name: 'Suriname', flag: '🇸🇷', cca2: 'SR' },
      { code: '+47', name: 'Svalbard and Jan Mayen', flag: '🇸🇯', cca2: 'SJ' },
      { code: '+268', name: 'Swaziland', flag: '🇸🇿', cca2: 'SZ' },
      { code: '+46', name: 'Sweden', flag: '🇸🇪', cca2: 'SE' },
      { code: '+41', name: 'Switzerland', flag: '🇨🇭', cca2: 'CH' },
      { code: '+963', name: 'Syria', flag: '🇸🇾', cca2: 'SY' },
      { code: '+886', name: 'Taiwan', flag: '🇹🇼', cca2: 'TW' },
      { code: '+992', name: 'Tajikistan', flag: '🇹🇯', cca2: 'TJ' },
      { code: '+255', name: 'Tanzania', flag: '🇹🇿', cca2: 'TZ' },
      { code: '+66', name: 'Thailand', flag: '🇹🇭', cca2: 'TH' },
      { code: '+670', name: 'Timor-Leste', flag: '🇹🇱', cca2: 'TL' },
      { code: '+228', name: 'Togo', flag: '🇹🇬', cca2: 'TG' },
      { code: '+690', name: 'Tokelau', flag: '🇹🇰', cca2: 'TK' },
      { code: '+676', name: 'Tonga', flag: '🇹🇴', cca2: 'TO' },
      { code: '+1 868', name: 'Trinidad and Tobago', flag: '🇹🇹', cca2: 'TT' },
      { code: '+216', name: 'Tunisia', flag: '🇹🇳', cca2: 'TN' },
      { code: '+90', name: 'Turkey', flag: '🇹🇷', cca2: 'TR' },
      { code: '+993', name: 'Turkmenistan', flag: '🇹🇲', cca2: 'TM' },
      { code: '+1 649', name: 'Turks and Caicos Islands', flag: '🇹🇨', cca2: 'TC' },
      { code: '+688', name: 'Tuvalu', flag: '🇹🇻', cca2: 'TV' },
      { code: '+256', name: 'Uganda', flag: '🇺🇬', cca2: 'UG' },
      { code: '+380', name: 'Ukraine', flag: '🇺🇦', cca2: 'UA' },
      { code: '+971', name: 'United Arab Emirates', flag: '🇦🇪', cca2: 'AE' },
      { code: '+44', name: 'United Kingdom', flag: '🇬🇧', cca2: 'GB' },
      { code: '+1', name: 'United States', flag: '🇺🇸', cca2: 'US' },
      { code: '+598', name: 'Uruguay', flag: '🇺🇾', cca2: 'UY' },
      { code: '+998', name: 'Uzbekistan', flag: '🇺🇿', cca2: 'UZ' },
      { code: '+678', name: 'Vanuatu', flag: '🇻🇺', cca2: 'VU' },
      { code: '+58', name: 'Venezuela', flag: '🇻🇪', cca2: 'VE' },
      { code: '+84', name: 'Vietnam', flag: '🇻🇳', cca2: 'VN' },
      { code: '+1 284', name: 'Virgin Islands (British)', flag: '🇻🇬', cca2: 'VG' },
      { code: '+1 340', name: 'Virgin Islands (US)', flag: '🇻🇮', cca2: 'VI' },
      { code: '+681', name: 'Wallis and Futuna', flag: '🇼🇫', cca2: 'WF' },
      { code: '+967', name: 'Yemen', flag: '🇾🇪', cca2: 'YE' },
      { code: '+260', name: 'Zambia', flag: '🇿🇲', cca2: 'ZM' },
      { code: '+263', name: 'Zimbabwe', flag: '🇿🇼', cca2: 'ZW' },
    ].sort((a, b) => a.name.localeCompare(b.name));
  }

  private getFallbackCountries(): PhoneCountry[] {
    return [
      { code: '+233', name: 'Ghana', flag: '🇬🇭', cca2: 'GH' },
      { code: '+44', name: 'United Kingdom', flag: '🇬🇧', cca2: 'GB' },
      { code: '+1', name: 'United States', flag: '🇺🇸', cca2: 'US' },
      { code: '+1', name: 'Canada', flag: '🇨🇦', cca2: 'CA' },
      { code: '+49', name: 'Germany', flag: '🇩🇪', cca2: 'DE' },
      { code: '+31', name: 'Netherlands', flag: '🇳🇱', cca2: 'NL' },
      { code: '+33', name: 'France', flag: '🇫🇷', cca2: 'FR' },
      { code: '+61', name: 'Australia', flag: '🇦🇺', cca2: 'AU' },
      { code: '+39', name: 'Italy', flag: '🇮🇹', cca2: 'IT' },
      { code: '+34', name: 'Spain', flag: '🇪🇸', cca2: 'ES' },
      { code: '+81', name: 'Japan', flag: '🇯🇵', cca2: 'JP' },
      { code: '+86', name: 'China', flag: '🇨🇳', cca2: 'CN' },
      { code: '+91', name: 'India', flag: '🇮🇳', cca2: 'IN' },
      { code: '+7', name: 'Russia', flag: '🇷🇺', cca2: 'RU' },
      { code: '+55', name: 'Brazil', flag: '🇧🇷', cca2: 'BR' },
      { code: '+27', name: 'South Africa', flag: '🇿🇦', cca2: 'ZA' },
      { code: '+20', name: 'Egypt', flag: '🇪🇬', cca2: 'EG' },
      { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦', cca2: 'SA' },
      { code: '+90', name: 'Turkey', flag: '🇹🇷', cca2: 'TR' },
      { code: '+41', name: 'Switzerland', flag: '🇨🇭', cca2: 'CH' },
    ];
  }

  searchCountries(
    query: string,
    countries: PhoneCountry[] = this.countries,
  ): PhoneCountry[] {
    if (!query.trim()) {
      return countries;
    }

    const lowercaseQuery = query.toLowerCase();
    return countries.filter(
      (country) =>
        country.name.toLowerCase().includes(lowercaseQuery) ||
        country.code.includes(lowercaseQuery) ||
        country.cca2.toLowerCase().includes(lowercaseQuery),
    );
  }

  getCountries(): PhoneCountry[] {
    return this.countries;
  }

  getCountryByCode(code: string): PhoneCountry | undefined {
    return this.countries.find((country) => country.code === code);
  }

  getCountryByName(name: string): PhoneCountry | undefined {
    return this.countries.find((country) => country.name === name);
  }
}

export const countryService = new CountryService();
