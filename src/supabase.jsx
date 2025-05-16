import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://dnbvhkfpkxgamevejusr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuYnZoa2Zwa3hnYW1ldmVqdXNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MTg1ODQsImV4cCI6MjA2Mjk5NDU4NH0.fC-DRdLrE65U1Ecqsztl1Y9affQhnWBQdrqKqqxGtZY';
export const supabase = createClient(supabaseUrl, supabaseKey);