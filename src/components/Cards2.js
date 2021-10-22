import React from 'react';
import Container from './Container';
import { TagOutlined, InfoCircleOutlined, SendOutlined } from '@ant-design/icons';
import { Row, Col, Popover } from 'antd';

export const Cards2 = () => {
  const content = (
    <div className='card-content-popover-content'>
      Puedes cancelar la actividad, si tus planes cambian.
    </div>
  );
  return (
    <Container>
      <div className='place-tittle'>
        <TagOutlined /> Conoce, Ecuador y su Cultura
      </div>
      <div className='container-cards'>
        <Row gutter={15}>
          <Col span={6}>
            <div className='card'>
              <img
                className='photo'
                alt='Amazonia Ecuador'
                src='https://res.cloudinary.com/dlypj8ldu/image/upload/v1634859956/mayotravel/card-amazonia-ecuador_mq5yyr.jpg'
              />
              <div className='card-content'>
                <div className='card-content-subtitle'>
                  <SendOutlined /> Excursión
                </div>
                <div className='card-content-title'>Tours en la Amazonia</div>
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
                  <div className='card-footer-number'>60</div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className='card'>
              <img
                className='photo'
                alt='Pailon del Diablo Baños Ecuador'
                src='https://res.cloudinary.com/dlypj8ldu/image/upload/v1634860410/mayotravel/card-pailon-diablo_ivry3z.jpg'
              />
              <div className='card-content'>
                <div className='card-content-subtitle'>
                  <SendOutlined /> Excursión
                </div>
                <div className='card-content-title'>Pailon del Diablo</div>
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
                alt='Quilotoa Ecuador'
                src='https://res.cloudinary.com/dlypj8ldu/image/upload/v1634860845/mayotravel/card-quilotoa-ecuador_klvajh.jpg'
              />
              <div className='card-content'>
                <div className='card-content-subtitle'>
                  <SendOutlined /> Excursión
                </div>
                <div className='card-content-title'>Laguna de Quilotoa </div>
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
                  <div className='card-footer-number'>50</div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className='card'>
              <img
                className='photo'
                alt='Tours a las islas galapagos en ecuador'
                src='https://res.cloudinary.com/dlypj8ldu/image/upload/v1634860145/mayotravel/card-galapagos-ecuador2_aawidp.jpg'
              />
              <div className='card-content'>
                <div className='card-content-subtitle'>
                  <SendOutlined /> Excursión
                </div>
                <div className='card-content-title'>Tours a Galápagos</div>
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
                  <div className='card-footer-number'>320</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
