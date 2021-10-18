import React from 'react';

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
    </div>
  );
}
