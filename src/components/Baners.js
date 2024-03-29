import React from 'react';
import Container from './Container';
import { Row, Col, Card } from 'antd';
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
          <Col xs={24} md={12}>
            <Card hoverable>
              <div className='photo-content'>
                <img
                  className='photo-oferts1 '
                  alt='Islas Galápagos Ecuador'
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
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card hoverable>
              <div className='photo-content2'>
                <img
                  className='photo-oferts1 '
                  alt='Decameron Mompiche Ecuador'
                  src='https://res.cloudinary.com/dlypj8ldu/image/upload/v1634926237/mayotravel/card-decameron-ecuador_bys5e4.jpg'
                />
                <div className='promotion-discount2'>10 % off</div>
                <div className='banner-content2'>
                  <div className='banner-content-subtitle2'>Hoteles</div>
                  <div className='banner-content-title2'>
                    <HomeOutlined /> Decameron Mompiche
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card hoverable>
              <div className='photo-content2'>
                <img
                  className='photo-oferts1 '
                  alt='Climbing Volcan Cotopaxi Ecuador'
                  src='https://res.cloudinary.com/dlypj8ldu/image/upload/v1634925965/mayotravel/card-climbing-ecuador_hljbfj.jpg'
                />
                <div className='promotion-discount3'>5 % off</div>
                <div className='banner-content2'>
                  <div className='banner-content-subtitle2'>Climbing</div>
                  <div className='banner-content-title2'>
                    <PushpinOutlined /> Volcán Cotopaxi
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
