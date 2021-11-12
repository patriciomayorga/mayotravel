import React from 'react';
import { ArrowDownOutlined } from '@ant-design/icons';

export default function Video() {
  return (
    <div className='video-container'>
      <video
        className='video'
        src='https://res.cloudinary.com/dlypj8ldu/video/upload/v1636740184/mayotravel/mayotodo_rsrgep.mp4'
        autoPlay
        loop
        muted
      ></video>
      <div className='video-content'>
        <h1>&quot;Tours de Aventura&quot;</h1>
        <p>En Ecuador y Las Islas Galápagos</p>
        <div className='flecha-down'>
          <ArrowDownOutlined />
        </div>
      </div>
    </div>
  );
}
