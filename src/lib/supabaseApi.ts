import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://poariyqsgdwyxmtwyyvo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjM0ODY1NDM0LCJleHAiOjE5NTA0NDE0MzR9.VllZusEqk6-WjnGPimNWx8IzRn2R6AbBFfD062zp8EM',
);
