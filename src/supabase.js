import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oyauhrndvttaodneipec.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95YXVocm5kdnR0YW9kbmVpcGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwNDk0MDAsImV4cCI6MjA1NjYyNTQwMH0.KqaoPJNO6HR8ng5swt0K_Nc7lBEIiPgcMocnLGQFkNU ';

export const supabase = createClient(supabaseUrl, supabaseKey);
