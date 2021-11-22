import React from 'react';
import Image from 'next/image';
import { ArrowDownOutlined, EnvironmentOutlined } from '@ant-design/icons';

export const PhotoProgram = ({ imageTittle, imageUrl, programTittle, description }) => {
  return (
    <div className='photo-program'>
      <Image layout='responsive' width='1349' height='565' alt={imageTittle} src={imageUrl} />
      <div className='video-content'>
        <h1>
          <EnvironmentOutlined />
          {programTittle}
        </h1>
        <p>{description} </p>
        <div className='flecha-down'>
          <ArrowDownOutlined />
        </div>
      </div>
    </div>
  );
};
