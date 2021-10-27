import React from 'react';
import Container from './Container';
import { MailOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';

export default function Mail() {
  return (
    <div className='mail-content'>
      <Container>
        <div className='offerts-mail'>
          <div className='logo-mail'>
            <MailOutlined />
          </div>
          <div className='input-mail'>
            <div className='input-tittle'>Ofertas exclusivas en tu correo</div>
            <Input placeholder='Ingresa tu email' />
            <div className='input-info'>Recibirás emails promocionales de mayotravel</div>
          </div>
          <div className='btn-send'>
            <Button type='primary'>!Quiero recibirlas¡</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
