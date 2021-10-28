import React from 'react';
import Container from './Container';
import { EnvironmentOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Card } from './Card';

export const Cards = ({ title, cards }) => {
  return (
    <Container>
      <div className='place-tittle'>
        <EnvironmentOutlined /> {title}
      </div>
      <div className='container-cards'>
        <Row gutter={15}>
          {cards.map(card => (
            <Col key={card.title} xs={24} md={6}>
              <Card
                imageUrl={card.imageUrl}
                category={card.category}
                title={card.title}
                price={card.price}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};
