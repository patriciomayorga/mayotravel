import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Link href='/about'>
        <a>About Us</a>
      </Link>
    </div>
  );
}
