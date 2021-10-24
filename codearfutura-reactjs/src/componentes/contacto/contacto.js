import React,{useState,useEffect} from 'react';
import './contacto.css';
import Intro from '../intro/intro';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Contacto = () => {

           //EMAIL
        const [email,setEmail]=useState((
                'Email'       
        ));
    
        const cambiarEmail =() =>{
            setEmail('slronzoni@gmail.com');
        }
    
        useEffect (()=>{
            console.log('muestro email de contacto')
        });
    
    
        //TELEGRAM
        const [celu,setCelu]=useState((
            'Telegram'
        ));
    
        const cambiarCelu =() =>{
             setCelu('@SLRONZ');
        }
    
        useEffect (()=>{
            console.log('muestro celu de contacto')
        });
    

    return(
        <div className="homeAcerca">
            <Intro titulo="Silvina Ronzoni" />
            <Container className="fondoContacto">
                <Row className="text-center">
                    <Col sm={4} md={4}> 
                        <h3>{email}</h3>
                        <button className="button btn" onClick={cambiarEmail}>Hacé click</button>
                    </Col>

                    <Col sm={4} md={4}> 
                        <h3>{celu}</h3>
                        <button className="button btn" onClick={cambiarCelu}>Hacé click</button>
                    </Col>
                </Row> 
                <Row>
                    
                </Row>               
            </Container>
        </div>
    );
  };

export default Contacto;

     

