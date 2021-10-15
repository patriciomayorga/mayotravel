import React from 'react';
import {
  HomeOutlined,
  EnvironmentOutlined,
  TagsOutlined,
  UserAddOutlined,
  PhoneOutlined,
  FlagOutlined,
  CompassOutlined,
} from '@ant-design/icons';
import Container from './conatiner';

const Header = () => {
  return (
    <nav>
      <Container>
        <div className='icon-letras'>
          <div className='icon-logo'>
            <CompassOutlined />
          </div>
          <label className='letras-logo'>mayotravel</label>
        </div>
        <ul>
          <li>
            <a href=''>
              <div className='icon'>
                <HomeOutlined />
              </div>{' '}
              Home
            </a>
          </li>
          <li>
            <a href=''>
              <div className='icon'>
                <EnvironmentOutlined />
              </div>{' '}
              Baños
            </a>
          </li>
          <li>
            <a href=''>
              <div className='icon'>
                <TagsOutlined />
              </div>{' '}
              Ecuador
            </a>
          </li>
          <li>
            <a href=''>
              <div className='icon'>
                <FlagOutlined />
              </div>{' '}
              Galápagos
            </a>
          </li>
          <li>
            <a href=''>
              <div className='icon'>
                <UserAddOutlined />
              </div>{' '}
              Quienes Somos
            </a>
          </li>
          <li>
            <a href=''>
              {' '}
              <div className='icon'>
                <PhoneOutlined />
              </div>{' '}
              Contacto
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  );
};
export default Header;