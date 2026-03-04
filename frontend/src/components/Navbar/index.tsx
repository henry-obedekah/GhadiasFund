// src/components/Navbar/index.tsx
import * as React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="w-full bg-black text-white">
      <div className="container mx-auto flex h-14 items-center px-4">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Accueil
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
