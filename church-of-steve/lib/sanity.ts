import { createClient } from '@sanity/client';

export const sanity = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '',
    dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
    useCdn: true,
    apiVersion: '2023-05-03',
});
