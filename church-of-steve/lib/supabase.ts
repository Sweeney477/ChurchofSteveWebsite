import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_URL ||
  '';

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.VITE_SUPABASE_KEY ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_KEY ||
  // Back-compat for older deployments (not the recommended name)
  import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY ||
  '';

/**
 * IMPORTANT:
 * This app runs in the browser (Vite). If Supabase env vars are not set in the deploy
 * environment, creating the client will throw and blank-screen the whole SPA.
 *
 * Set these in Vercel (Production + Preview):
 * - VITE_SUPABASE_URL
 * - VITE_SUPABASE_ANON_KEY
 */
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

if (!supabase) {
  console.warn('Supabase credentials missing. Check your environment variables.');
}
