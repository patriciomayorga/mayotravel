import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Video from '../components/Video';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Video />
      <Link href='/about'>
        <a>About Us asdsa dfdssdf</a>
      </Link>
    </div>
  );
}
