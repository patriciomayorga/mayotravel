import type { NextApiRequest, NextApiResponse } from 'next';
import { PostgrestClient } from '@supabase/postgrest-js';

const REST_URL = 'https://poariyqsgdwyxmtwyyvo.supabase.co';
const postgrest = new PostgrestClient(REST_URL).auth(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjM0ODY1NDM0LCJleHAiOjE5NTA0NDE0MzR9.VllZusEqk6-WjnGPimNWx8IzRn2R6AbBFfD062zp8EM',
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const carousels = await postgrest.from('activities').select('*');
  res.status(200).json({ name: 'John Doe', carousels });
};
