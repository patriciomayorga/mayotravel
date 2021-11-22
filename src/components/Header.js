import React, { useState } from 'react';
import Link from 'next/link';
import {
  HomeOutlined,
  EnvironmentOutlined,
  TagsOutlined,
  FolderOutlined,
  PhoneOutlined,
  FlagOutlined,
  AlertOutlined,
  MenuOutlined,
  BellOutlined,
  CarOutlined,
} from '@ant-design/icons';
import Container from './Container';
import { useRouter } from 'next/router';

const Header = () => {
  const { pathname } = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <Container>
        <div className='icon-letras'>
          <div className='logo'>
            <div className='icon-logo'>
              <AlertOutlined />
            </div>
            <label className='letras-logo'>mayotravel</label>
          </div>
          <div className='menu-outlined' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuOutlined />
          </div>
        </div>
        {isMenuOpen && (
          <div className='mobile-nabvar'>
            <ul>
              <li className={`${pathname === '/' && 'active-menu'}`}>
                <Link href='/'>
                  <a>
                    <div className='icon'>
                      <HomeOutlined />
                    </div>
                    Home
                  </a>
                </Link>
              </li>
              <li className={`${pathname === '/banos_ecuador' && 'active-menu'}`}>
                <Link href='/banos_ecuador'>
                  <a>
                    <div className='icon'>
                      <EnvironmentOutlined />
                    </div>
                    Baños
                  </a>
                </Link>
              </li>
              <li className={`${pathname === '/tours_ecuador' && 'active-menu'}`}>
                <Link href='/tours_ecuador'>
                  <a>
                    <div className='icon'>
                      <TagsOutlined />
                    </div>
                    Ecuador
                  </a>
                </Link>
              </li>
              <li className={`${pathname === '/galapagos_ecuador_tours' && 'active-menu'}`}>
                <Link href='/galapagos_ecuador_tours'>
                  <a>
                    <div className='icon'>
                      <FlagOutlined />
                    </div>
                    Galápagos
                  </a>
                </Link>
              </li>
              <li className={`${pathname === '/paquetes_turisticos' && 'active-menu'}`}>
                <Link href='/paquetes_turisticos'>
                  <a>
                    <div className='icon'>
                      <FolderOutlined />
                    </div>
                    Paquetes
                  </a>
                </Link>
              </li>
              <li className={`${pathname === '/hoteles_ecuador' && 'active-menu'}`}>
                <Link href='/hoteles_ecuador'>
                  <a>
                    <div className='icon'>
                      <BellOutlined />
                    </div>
                    Hoteles
                  </a>
                </Link>
              </li>
              <li className={`${pathname === '/traslados' && 'active-menu'}`}>
                <Link href='/traslados'>
                  <a>
                    <div className='icon'>
                      <CarOutlined />
                    </div>
                    Traslados
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        )}
        <ul>
          <li className={`${pathname === '/' && 'active-menu'}`}>
            <Link href='/'>
              <a>
                <div className='icon'>
                  <HomeOutlined />
                </div>
                Home
              </a>
            </Link>
          </li>
          <li className={`${pathname === '/banos_ecuador' && 'active-menu'}`}>
            <Link href='/banos_ecuador'>
              <a>
                <div className='icon'>
                  <EnvironmentOutlined />
                </div>
                Baños
              </a>
            </Link>
          </li>
          <li className={`${pathname === '/tours_ecuador' && 'active-menu'}`}>
            <Link href='/tours_ecuador'>
              <a>
                <div className='icon'>
                  <TagsOutlined />
                </div>
                Ecuador
              </a>
            </Link>
          </li>
          <li className={`${pathname === '/galapagos_ecuador_tours' && 'active-menu'}`}>
            <Link href='/galapagos_ecuador_tours'>
              <a>
                <div className='icon'>
                  <FlagOutlined />
                </div>
                Galápagos
              </a>
            </Link>
          </li>
          <li className={`${pathname === '/paquetes_turisticos' && 'active-menu'}`}>
            <Link href='/paquetes_turisticos'>
              <a>
                <div className='icon'>
                  <FolderOutlined />
                </div>
                Paquetes
              </a>
            </Link>
          </li>
          <li className={`${pathname === '/hoteles_ecuador' && 'active-menu'}`}>
            <Link href='/hoteles_ecuador'>
              <a>
                <div className='icon'>
                  <BellOutlined />
                </div>
                Hoteles
              </a>
            </Link>
          </li>
          <li className={`${pathname === '/traslados' && 'active-menu'}`}>
            <Link href='/traslados'>
              <a>
                <div className='icon'>
                  <CarOutlined />
                </div>
                Traslados
              </a>
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};
export default Header;
