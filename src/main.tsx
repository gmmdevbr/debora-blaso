import { PostHogProvider } from '@posthog/react';
import { Analytics } from '@vercel/analytics/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import initPosthog from './lib/posthog';

// Initialize PostHog safely (guards SSR and missing env vars)
const posthogClient = initPosthog();

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      {posthogClient ? (
        <PostHogProvider client={posthogClient}>
          <App />
          <Analytics />
        </PostHogProvider>
      ) : (
        <>
          <App />
          <Analytics />
        </>
      )}
    </StrictMode>
  );
}
