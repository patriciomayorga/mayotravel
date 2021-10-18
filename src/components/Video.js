import React from 'react';
import { ArrowDownOutlined } from '@ant-design/icons';

export default function Video() {
  return (
    <div className='video-container'>
      {' '}
      <video
        className='video'
        src='https://res.cloudinary.com/dlypj8ldu/video/upload/v1634513077/mayotravel/galapagos-ecuador_heu0z9.mp4'
        autoPlay
        loop
        muted
      ></video>
      <div className='video-content'>
        <h1>"Tours de Aventura"</h1>
        <p>En Ecuador y Las Islas Galápagos</p>
        <div className='flecha-down'>
          <ArrowDownOutlined />
        </div>
      </div>
    </div>
  );
}
