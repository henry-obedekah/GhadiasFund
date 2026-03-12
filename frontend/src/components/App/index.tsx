// src/components/App/index.tsx
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { SiteFooter } from '../Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-navy via-deep-green to-navy font-dm-sans">
      <Navbar />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};

export default App;
