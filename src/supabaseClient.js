import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseUrl = '';
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabaseAnonKey = ''
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
