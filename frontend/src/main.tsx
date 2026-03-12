import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ProductsPage from './components/pages/ProductsPage';
import SectorsPage from './components/pages/SectorsPage';
import GovernancePage from './components/pages/GovernancePage';
import ContactPage from './components/pages/ContactPage';
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
      { path: 'sectors', element: <SectorsPage /> },
      { path: 'governance', element: <GovernancePage /> },
      { path: 'contact', element: <ContactPage /> },
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
