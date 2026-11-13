import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import { InvestmentEnquiryPage } from './components/pages/InvestmentEnquiryPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import TermsPage from './components/pages/TermsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'invest', element: <InvestmentEnquiryPage /> },
      { path: 'contact', element: <InvestmentEnquiryPage /> },
      { path: 'privacy', element: <PrivacyPolicyPage /> },
      { path: 'terms', element: <TermsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gradient-to-br from-navy via-deep-green to-navy text-[hsl(var(--foreground))]">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);
