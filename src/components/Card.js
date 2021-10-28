import React from 'react';
import { InfoCircleOutlined, PushpinOutlined } from '@ant-design/icons';
import { Popover, Card as AntCard } from 'antd';
import Image from 'next/image';

export const Card = ({ imageUrl, category, title, price }) => {
  const content = (
    <div className='card-content-popover-content'>
      Puedes cancelar la actividad, si tus planes cambian.
    </div>
  );
  return (
    <AntCard hoverable>
      <div className='card'>
        <Image width='304' height='206' className='photo' alt={title} src={imageUrl} />
        <div className='card-content'>
          <div className='card-content-subtitle'>
            <PushpinOutlined /> {category}
          </div>
          <div className='card-content-title'>{title}</div>
          <Popover className='card-content-popover' placement='topLeft' content={content}>
            <span className='reserva-flexible'>
              <InfoCircleOutlined /> Reserva Flexible
            </span>
          </Popover>
        </div>
        <div className='card-footer'>
          Precio por adulto desde:
          <div className='card-footer-inside'>
            <div className='card-footer-usd'>Usd</div>
            <div className='card-footer-number'>{price}</div>
          </div>
        </div>
      </div>
    </AntCard>
  );
};
