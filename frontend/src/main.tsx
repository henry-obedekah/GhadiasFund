import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ProductsPage from './components/pages/ProductsPage';
import { InvestmentEnquiryPage } from './components/pages/InvestmentEnquiryPage';
import LoginPage from './components/pages/LoginPage';
import { UserContextProvider } from './contexts/UserContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'invest', element: <InvestmentEnquiryPage /> },
      { path: 'contact', element: <InvestmentEnquiryPage /> },
      { path: 'onboarding', element: <InvestmentEnquiryPage /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </div>
  </React.StrictMode>,
);
