import React from 'react';
import './acerca.css';
import Intro from '../intro/intro';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Acerca = () => {
    return(
        <div className="homeAcerca">
            <Intro titulo="Silvina Ronzoni" />
            <Container>
               
                <Row className="fondo"> 
                    <Col className="textoCol" xs={1} sm={12}>
                    <br></br>
                    <br></br>
                    <span className="texto">Soy una mujer activa y en constante proceso de incorporación de conocimientos.</span>
                    <br></br>
                    <br></br>
                    <span className="texto" >Busco una propuesta laboral que me permita seguir desarrollando habilidades</span>
                    <br></br>
                    <br></br>
                    <span className="texto" >y donde pueda aportar mi experiencia para lograr los objetivos. </span>

                    </Col>
                    <Col xs={12} sm={4}>
                        
                    </Col>
                </Row>                
                
            </Container>

        </div>
    );
}

export default Acerca;