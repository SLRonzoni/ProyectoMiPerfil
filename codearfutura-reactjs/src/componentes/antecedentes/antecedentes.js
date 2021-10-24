import React from 'react';
import './antecedentes.css';
import Intro from '../intro/intro';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const Antecedentes = () => {
    return(
        <div className="homeAcerca">
            <Intro titulo="Silvina Ronzoni" />
            <Container className="fondoAntecedentes">
                <br></br>
                <br></br>     
                <br></br>          
                <Row>
                <h2 className="textoAntecedentes">Experiencia laboral</h2>
                <br></br>     
                <br></br> 
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Prosegur S.A.</h5>
                            <p className="card-text">( Analista de Remuneraciones y Liquidadora de Sueldos )</p>
                            <span>Me desempeñé en el área de RR.HH. desde 09/1997 a 08/2005</span>
                            <p></p>
                           <a href ='http://prosegur.com.ar' className="link btn">Ver la empresa</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Unionbat S.A.</h5>
                            <p className="card-text">( Liquidadora de Sueldos y Administrativa de RR.HH. )</p>
                            <span>Me desempeñé en el área de RR.HH. desde 07/1991 a 08/1997</span>
                            <p></p>
                            <a href= 'http://unionbat.com.ar' className="link btn">Ver la empresa</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </Row>
            </Container>

        </div>
    );
}

export default Antecedentes;