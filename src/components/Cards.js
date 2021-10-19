import React from 'react';
import Container from './Container';
import { EnvironmentOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Row, Col, Tag, Popover } from 'antd';

export const Cards = () => {
  const content = (
    <div className='card-content-popover-content'>
      Si tus planes cambian, puedes cancelar la actividad.
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
                src='https://media.staticontent.com/media/pictures/5192c06f-10ab-44e8-bfe2-9c03913fbebb/295x200'
              />
              <div className='card-content'>
                <h4 className='card-content-subtitle'>Actividades</h4>
                <h3 className='card-content-title'>Rafting</h3>
                <Popover className='card-content-popover' placement='topLeft' content={content}>
                  <Tag color='#f50'>
                    <InfoCircleOutlined /> Reserva Flexible
                  </Tag>
                </Popover>
              </div>
              <div className='card-footer'>
                Precio por adulto desde:
                <div className='card-footer-inside'>
                  <h4 className='card-footer-usd'>Usd</h4>
                  <h3 className='card-footer-number'>40</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className='card'>
              <img
                className='photo'
                src='https://media.staticontent.com/media/pictures/5192c06f-10ab-44e8-bfe2-9c03913fbebb/295x200'
              />
            </div>
          </Col>
          <Col span={6}>
            <div className='card'>
              <img
                className='photo'
                src='https://media.staticontent.com/media/pictures/5192c06f-10ab-44e8-bfe2-9c03913fbebb/295x200'
              />
            </div>
          </Col>
          <Col span={6}>
            <div className='card'>
              <img
                className='photo'
                src='https://media.staticontent.com/media/pictures/5192c06f-10ab-44e8-bfe2-9c03913fbebb/295x200'
              />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
