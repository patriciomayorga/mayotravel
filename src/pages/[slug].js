import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import { pages } from '../data/pages';

export default function About() {
  const { query } = useRouter();
  const { slug } = query;
  const page = pages.filter(page => page.slug === slug)[0];
  if (!page) return null;

  return (
    <div>
      <Head>
        <title>Mayotravel - About</title>
      </Head>
      <Header />
      {page.title}
    </div>
  );
}
