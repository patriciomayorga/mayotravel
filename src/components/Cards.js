import React from 'react';
import Container from './Container';
import { EnvironmentOutlined, InfoCircleOutlined, PushpinOutlined } from '@ant-design/icons';
import { Row, Col, Popover } from 'antd';

export const Cards = () => {
  const content = (
    <div className='card-content-popover-content'>
      Puedes cancelar la actividad, si tus planes cambian.
    </div>
  );
  return (
    <Container>
      <div className='place-tittle'>
        <EnvironmentOutlined /> Disfruta Baños de Agua Santa
      </div>
      <div className='container-cards'>
        <Row gutter={15}>
          <Col span={6}>
            <div className='card'>
              <img
                className='photo'
                alt='Rafting Baños Ecuador'
                src='https://res.cloudinary.com/dlypj8ldu/image/upload/v1634665069/mayotravel/card-rafting-banos-ecuador_dqggg9.jpg'
              />
              <div className='card-content'>
                <div className='card-content-subtitle'>
                  <PushpinOutlined /> Actividades
                </div>
                <div className='card-content-title'>Rafting</div>
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
                  <div className='card-footer-number'>30</div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className='card'>
              <img
                className='photo'
                alt='Las manos de Dios Baños Ecuador'
                src='https://res.cloudinary.com/dlypj8ldu/image/upload/v1634665069/mayotravel/card-las-manos-de-dios-banos-ecuador_pgbows.jpg'
              />
              <div className='card-content'>
                <div className='card-content-subtitle'>
                  <PushpinOutlined /> Actividades
                </div>
                <div className='card-content-title'>Las Manos de Dios</div>
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
                  <div className='card-footer-number'>10</div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className='card'>
              <img
                className='photo'
                alt='Canyoning Baños Ecuador'
                src='https://res.cloudinary.com/dlypj8ldu/image/upload/v1634665069/mayotravel/card-canyoning-banos-ecuador_bnmtfl.jpg'
              />
              <div className='card-content'>
                <div className='card-content-subtitle'>
                  <PushpinOutlined /> Actividades
                </div>
                <div className='card-content-title'>Canyoning</div>
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
                  <div className='card-footer-number'>30</div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className='card'>
              <img
                className='photo'
                alt='La casa del arbol Baños Ecuador'
                src='https://res.cloudinary.com/dlypj8ldu/image/upload/v1634665069/mayotravel/card-casa-del-arbol-banos-ecuador_bdb7kv.jpg'
              />
              <div className='card-content'>
                <div className='card-content-subtitle'>
                  <PushpinOutlined /> Actividades
                </div>
                <div className='card-content-title'>La Casa del Arbol</div>
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
                  <div className='card-footer-number'>8</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
