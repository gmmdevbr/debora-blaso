import posthog from 'posthog-js';

/**
 * Initialize PostHog client safely and return the initialized client.
 * - Guards against SSR
 * - Ensures required env vars exist
 * - Uses sensible defaults for SPA usage
 *
 * Docs: https://posthog.com/docs/libraries/react
 */
export default function initPosthog() {
  if (typeof window === 'undefined') return undefined;

  const key = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
  const host = import.meta.env.VITE_PUBLIC_POSTHOG_HOST;

  if (!key || !host) {
    if (import.meta.env.MODE === 'development') {
      // Helpful dev-time warning if env vars are missing
      // eslint-disable-next-line no-console
      console.warn(
        '[posthog] VITE_PUBLIC_POSTHOG_KEY or VITE_PUBLIC_POSTHOG_HOST missing — PostHog not initialized.'
      );
    }
    return undefined;
  }

  // initialize the global client (idempotent in practice)
  posthog.init(key, {
    api_host: host,
    // send person profiles only when identified (default behaviour)
    person_profiles: 'identified_only',
    // SPA-friendly pageview tracking
    capture_pageview: 'history_change',
    // reasonable flag timeout so feature flags don't block
    feature_flag_request_timeout_ms: 3000,
    loaded: (ph) => {
      if (import.meta.env.MODE === 'development') ph.debug();
    },
  });

  return posthog;
}
