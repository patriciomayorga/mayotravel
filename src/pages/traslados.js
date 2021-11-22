import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import Mail from '../components/Mail';
import { Traslados } from '../components/Traslados';

export default function traslados() {
  return (
    <div>
      <Head>
        <title>Contáctenos | Mayotravel Guia de Viajes </title>
      </Head>
      <Header />
      <Traslados />
      <Mail />
      <Footer />
    </div>
  );
}
