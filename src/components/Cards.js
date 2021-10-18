import React from 'react'
import Container from './Container';
import {EnvironmentOutlined} from '@ant-design/icons';
import { Row, Col } from 'antd';


export const Cards = () => {
    return (
        <Container>
            <div className="place-tittle">
            <EnvironmentOutlined />
                Disfruta Baños de Agua Santa
            </div>
            <div className="container-cards">
            <div className="cards">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <h1>aqui van los cards</h1>
                </Col>
                <Col className="gutter-row" span={6}>
                <h1>aqui van los cards</h1>
                </Col>
                <Col className="gutter-row" span={6}>
                <h1>aqui van los cards</h1>
                </Col>
                <Col className="gutter-row" span={6}>
                <h1>aqui van los cards</h1>
                </Col>
                </Row>     
            </div>
        </div>
        </Container>
        
    )
}
