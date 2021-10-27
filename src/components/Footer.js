import React from 'react';
import Container from './Container';
import { Row, Col } from 'antd';
import {
  WhatsAppOutlined,
  FacebookOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

export const Footer = () => {
  return (
    <div className='footer-content'>
      <Container>
        <div className='footer-colums'>
          <Row gutter={15}>
            <Col xs={24} md={6}>
              <div className='footer-titles'>Mayotravel</div>
              <p>
                Mayotravel es la principal Mayorista y Agencia de viajes en Ecuador, especializada
                en la organización de tours de aventura en Baños y todo el Ecuador, reserva de
                hoteles, Tours a Las Islas Galápagos y Paquetes Internacionales con el servicio Todo
                Incluido.
              </p>
            </Col>
            <Col xs={24} md={6}>
              <div className='footer-titles'>Actividades</div>
              <div className='footer-nav-in'>
                <a href=''>Actividades y Tours en Baños</a>
                <a href=''>Actividades y Tours en Galápagos</a>
                <a href=''>Actividades y Tours en Ecuador</a>
                <a href=''>Actividades y Tours en la Amazonia</a>
              </div>
            </Col>
            <Col xs={24} md={6}>
              <div className='footer-titles'>Paquetes</div>
              <div className='footer-nav-in'>
                <a href=''>Paquetes en Baños</a>
                <a href=''>Paquetes en Galápagos</a>
                <a href=''>Paquetes en Ecuador</a>
                <a href=''>Hoteles Decameron</a>
              </div>
            </Col>
            <Col xs={24} md={6}>
              <div className='footer-titles'>Contactenos</div>
              <div className='contact-footer'>
                <li>
                  <WhatsAppOutlined /> +593 995110858
                </li>
                <li>
                  <FacebookOutlined /> mayotravel
                </li>
                <li>
                  <MailOutlined /> info@mayo-travel.com
                </li>
                <li>
                  <EnvironmentOutlined /> Baños - Quito - Ecuador
                </li>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className='sub-footer-content'>
        <Container>
          <div className='footer-left'>Todos Los Derechos Reservados. mayotravel 2022 © </div>
          <div className='footer-rigth'>Baños | Quito. Ecuador, Sudamerica</div>
        </Container>
      </div>
    </div>
  );
};
