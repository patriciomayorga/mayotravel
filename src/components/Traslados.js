import React from 'react';
import Container from './Container';
import { DatePicker, Select, Button } from 'antd';
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
  UserOutlined,
  SearchOutlined,
} from '@ant-design/icons';

function onChange(date, dateString) {
  console.log(date, dateString);
}
const { Option } = Select;
export const Traslados = () => {
  return (
    <div className='trasladoscontent'>
      <Container>
        <div className='buscador'>
          <h1>Traslados</h1>
          <div className='datepicker'>
            <div className='sbox'>
              <div className='sbox-icon'>
                <EnvironmentOutlined />
              </div>
              <div className='sbox-content'>
                <div className='sbox-title'>Desde</div>
                <Select
                  showSearch
                  style={{ width: 160 }}
                  bordered={false}
                  placeholder='Ingresa una ciudad'
                  optionFilterProp='children'
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value='1'>Baños</Option>
                  <Option value='2'>Ambato</Option>
                  <Option value='3'>Quito</Option>
                  <Option value='4'>Cuenca</Option>
                  <Option value='5'>Guayaquil</Option>
                  <Option value='6'>Riobamba</Option>
                  <Option value='7'>Otavalo</Option>
                  <Option value='8'>Tulcan</Option>
                  <Option value='9'>Puyo</Option>
                  <Option value='10'>Tena</Option>
                  <Option value='11'>Macas</Option>
                  <Option value='12'>Coca</Option>
                  <Option value='13'>Latacunga</Option>
                  <Option value='14'>Ibarra</Option>
                  <Option value='15'>Santo Domingo</Option>
                  <Option value='16'>Esmeraldas</Option>
                  <Option value='17'>Atacames</Option>
                  <Option value='18'>17:00</Option>
                  <Option value='19'>Aeropuerto Quito</Option>
                  <Option value='20'>Aeropuerto Guayaquil</Option>
                  <Option value='21'>20:00</Option>
                  <Option value='22'>21:00</Option>
                  <Option value='23'>22:00</Option>
                  <Option value='24'>23:00</Option>
                  <Option value='25'>24:00</Option>
                </Select>
              </div>
            </div>
            <div className='sbox'>
              <div className='sbox-icon'>
                <EnvironmentOutlined />
              </div>
              <div className='sbox-content'>
                <div className='sbox-title'>Hasta</div>
                <Select
                  showSearch
                  style={{ width: 160 }}
                  bordered={false}
                  placeholder='Ingresa una ciudad'
                  optionFilterProp='children'
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value='1'>Baños</Option>
                  <Option value='2'>Ambato</Option>
                  <Option value='3'>Quito</Option>
                  <Option value='4'>Cuenca</Option>
                  <Option value='5'>Guayaquil</Option>
                  <Option value='6'>Riobamba</Option>
                  <Option value='7'>Otavalo</Option>
                  <Option value='8'>Tulcan</Option>
                  <Option value='9'>Puyo</Option>
                  <Option value='10'>Tena</Option>
                  <Option value='11'>Macas</Option>
                  <Option value='12'>Coca</Option>
                  <Option value='13'>Latacunga</Option>
                  <Option value='14'>Ibarra</Option>
                  <Option value='15'>Santo Domingo</Option>
                  <Option value='16'>Esmeraldas</Option>
                  <Option value='17'>Atacames</Option>
                  <Option value='18'>17:00</Option>
                  <Option value='19'>Aeropuerto Quito</Option>
                  <Option value='20'>Aeropuerto Guayaquil</Option>
                  <Option value='21'>20:00</Option>
                  <Option value='22'>21:00</Option>
                  <Option value='23'>22:00</Option>
                  <Option value='24'>23:00</Option>
                  <Option value='25'>24:00</Option>
                </Select>
              </div>
            </div>
            <div className='sbox'>
              <div className='sbox-icon'>
                <CalendarOutlined />
              </div>
              <div className='sbox-content'>
                <div className='sbox-title'>Fecha</div>
                <DatePicker onChange={onChange} bordered={false} />
              </div>
            </div>
            <div className='sbox'>
              <div className='sbox-icon'>
                <ClockCircleOutlined />
              </div>
              <div className='sbox-content'>
                <div className='sbox-title'>Hora</div>
                <Select
                  showSearch
                  style={{ width: 90 }}
                  bordered={false}
                  placeholder='00:00'
                  optionFilterProp='children'
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value='1'>00:00</Option>
                  <Option value='2'>01:00</Option>
                  <Option value='3'>02:00</Option>
                  <Option value='4'>03:00</Option>
                  <Option value='5'>04:00</Option>
                  <Option value='6'>05:00</Option>
                  <Option value='7'>06:00</Option>
                  <Option value='8'>07:00</Option>
                  <Option value='9'>08:00</Option>
                  <Option value='10'>09:00</Option>
                  <Option value='11'>10:00</Option>
                  <Option value='12'>11:00</Option>
                  <Option value='13'>12:00</Option>
                  <Option value='14'>13:00</Option>
                  <Option value='15'>14:00</Option>
                  <Option value='16'>15:00</Option>
                  <Option value='17'>16:00</Option>
                  <Option value='18'>17:00</Option>
                  <Option value='19'>18:00</Option>
                  <Option value='20'>19:00</Option>
                  <Option value='21'>20:00</Option>
                  <Option value='22'>21:00</Option>
                  <Option value='23'>22:00</Option>
                  <Option value='24'>23:00</Option>
                  <Option value='25'>24:00</Option>
                </Select>
              </div>
            </div>
            <div className='sbox'>
              <div className='sbox-icon'>
                <UserOutlined />
              </div>
              <div className='sbox-content'>
                <div className='sbox-title'>Pasajeros</div>
                <Select
                  showSearch
                  style={{ width: 90 }}
                  bordered={false}
                  placeholder='1'
                  optionFilterProp='children'
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value='1'>1</Option>
                </Select>
              </div>
            </div>
            <Button type='primary' className='button-buscar' icon={<SearchOutlined />}>
              Buscar
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
