import React, { useEffect } from 'react';
import { Baners } from '../components/Baners';
import { Cards } from '../components/Cards';
import Header from '../components/Header';
import Video from '../components/Video';
import { Footer } from '../components/Footer';
import { Cards2 } from '../components/Cards2';
import Mail from '../components/Mail';

import { supabase } from '../lib/supabaseApi';

export default function HomePage() {
  useEffect(() => {
    async function load() {
      const carousels = await supabase.from('Carousels').select('*');
      console.log(carousels);
    }
    load();
  }, []);

  return (
    <div>
      <Header />
      <Video />
      <Cards />
      <Baners />
      <Cards2 />
      <Mail />
      <Footer />
    </div>
  );
}
