import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import posthog from 'posthog-js';
import { PostHogProvider } from '@posthog/react';
import './index.css';
import App from './App.tsx';

// INICIALIZAÇÃO DO SDK (Essencial para o Autocapture funcionar)
if (typeof window !== 'undefined') {
  posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
    api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
    person_profiles: 'identified_only',
    capture_pageview: true, // Rastreia trocas de página automaticamente
    loaded: (ph) => {
      // Ativa o modo debug apenas em desenvolvimento
      if (import.meta.env.MODE === 'development') ph.debug();
    },
  });
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <PostHogProvider client={posthog}>
        <App />
        <Analytics />
      </PostHogProvider>
    </StrictMode>
  );
}
