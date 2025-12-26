import { createClient, type SanityClient } from '@sanity/client';

const sanityProjectId =
  import.meta.env.VITE_SANITY_PROJECT_ID ||
  import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  '';

const sanityDataset =
  import.meta.env.VITE_SANITY_DATASET ||
  import.meta.env.NEXT_PUBLIC_SANITY_DATASET ||
  'production';

/**
 * IMPORTANT:
 * This app runs in the browser (Vite). If Sanity env vars are not set in the deploy
 * environment, creating the client will throw and blank-screen the whole SPA.
 *
 * Set these in Vercel (Production + Preview):
 * - VITE_SANITY_PROJECT_ID
 * - VITE_SANITY_DATASET (optional; defaults to "production")
 */
export const sanity: SanityClient | null = sanityProjectId
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      useCdn: true,
      apiVersion: '2023-05-03',
    })
  : null;

if (!sanity) {
  console.warn('Sanity credentials missing. Check your environment variables.');
}
