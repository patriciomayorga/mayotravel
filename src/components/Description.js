import React from 'react';
import Container from './Container';
import { Row, Col } from 'antd';

export const Description = ({ Text1, TextDescription, TextPlace }) => {
  return (
    <div className='description-content'>
      <Container>
        <Row>
          <Col span={12}>
            <div className='text-description'>
              <h2>
                {Text1} <br></br>
              </h2>{' '}
              <p>{TextDescription}</p>
            </div>
          </Col>
          <Col span={12}>
            <div className='description-title'>
              <h2>{TextPlace}</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
