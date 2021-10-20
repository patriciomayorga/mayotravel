import React from 'react';
import Container from './Container';
import { Row, Col } from 'antd';
import {
  ShoppingCartOutlined,
  EnvironmentOutlined,
  HomeOutlined,
  PushpinOutlined,
} from '@ant-design/icons';

export const Baners = () => {
  return (
    <Container>
      <div className='tittle-oferts'>
        <ShoppingCartOutlined /> Ofertas de la semana
      </div>
      <div className='baners-box'>
        <Row gutter={15}>
          <Col span={12}>
            <div className='photo-content'>
              <img
                className='photo-oferts1 '
                src='https://res.cloudinary.com/dlypj8ldu/image/upload/v1634686393/mayotravel/card-galapagos-ecuador_mmyf4s.jpg'
              />
              <div className='promotion-discount'>Hasta 15 % off</div>
              <div className='banner-content'>
                <div className='banner-content-subtitle'>Ecuador</div>
                <div className='banner-content-title'>
                  <EnvironmentOutlined /> Islas Galápagos
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className='photo-content2'>
              <img
                className='photo-oferts1 '
                src='https://res.cloudinary.com/dlypj8ldu/image/upload/v1634686657/mayotravel/card-decameron-ecuador_qcf29e.jpg'
              />
              <div className='promotion-discount2'>10 % off</div>
              <div className='banner-content2'>
                <div className='banner-content-subtitle2'>Hoteles</div>
                <div className='banner-content-title2'>
                  <HomeOutlined /> Decameron Mompiche
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className='photo-content2'>
              <img
                className='photo-oferts1 '
                src='https://res.cloudinary.com/dlypj8ldu/image/upload/v1634685674/mayotravel/card-climbing-ecuador_meqff7.jpg'
              />
              <div className='promotion-discount3'>5 % off</div>
              <div className='banner-content2'>
                <div className='banner-content-subtitle2'>Climbing</div>
                <div className='banner-content-title2'>
                  <PushpinOutlined /> Volcán Cotopaxi
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      ;
    </Container>
  );
};
