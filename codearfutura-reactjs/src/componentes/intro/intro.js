import React from 'react';
import './intro.css';

import foto from '../intro/foto.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Intro = ({titulo}) => {
    return(
        <header>
            <Container className="container">
                <Row>
                    <Col xs={6} sm={3}>
                        <img className="icon rounded Circle"  src={foto} alt="Foto"></img>
                    </Col>
                    <Col className="texto-intro rounded Circle" xs={12} sm={8}>
                        <h1>{titulo}</h1>
                        <p className="pIntro">Desarrolladora Web Full Stack y Liquidadora de Sueldos</p>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Intro;