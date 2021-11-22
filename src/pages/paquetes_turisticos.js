import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import Mail from '../components/Mail';

export default function paquetes_turisticos() {
  return (
    <div>
      <Head>
        <title>Paquetes Turisticos| Mayotravel Guia de Viajes </title>
      </Head>
      <Header />
      <Mail />
      <Footer />
    </div>
  );
}
