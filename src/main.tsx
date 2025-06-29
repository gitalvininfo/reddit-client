import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex justify-center p-4 min-h-screen border-4 border-indigo-500">
      <App />
    </div>
  </StrictMode>
);
