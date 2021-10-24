import React from 'react';
//import axiosCliente from "../../configAxios/axiosCliente";
import { useEffect, useState } from 'react';

import './conocimientos.css';
import Intro from '../intro/intro';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Conocimientos(){

    const [datos, setDatos] = useState([]);

    useEffect(() => 
       fetch('http://localhost:3000/profile')
       .then(response => 
           response.json()
       )
       .then(datos => 
           setDatos(datos)
       )
    );


    return(
        <div className="homeAcerca">
            <Intro titulo="Silvina Ronzoni" />
            <Container className="fondoConocimientos">
                <br></br> 
                <Row>
                <h2 className="textoConocimiento">Conocimientos</h2>
                <a href= 'https://github.com/SLRonzoni/MediaChicasGit' className="linkProyecto btn">Ver Mis Proyectos en Github</a>
                </Row>
                <br></br> 
                <h2 className="textoConocimiento">Lista de Cursos</h2>
                <br></br>
                <div className="row">
                <div className="col-md-12">
    
                 <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr> 
                        <th scope="col">Nro</th>
                        <th><button className="btnCurso">Nombre</button></th>
                        <th scope="col">Entidad</th>
                        <th><button className="btnCurso">Especialización</button></th>
                        <th scope="col">Inicio</th>
                        <th><button className="btnCurso">Fin</button></th>
                        <th scope="col">Carga Horaria</th>
                        </tr>
                    </thead> 

                    <tbody className="datos">
                        
                        {datos.map(curso => (
                            <tr key={curso.id}>
                            <td className="columna">{curso.id}</td>
                            <td className="columna" >{curso.nombreCurso}</td>
                            <td className="columna">{curso.entidad}</td>
                            <td className="columna">{curso.lenguaje}</td>
                            <td className="columna" >{curso.inicio}</td>
                            <td className="columna" >{curso.fin}</td>
                            <td className="columna hs">{curso.cargaHs}</td>
                            </tr>
                        ))}
                    </tbody>

                 </table>

                </div>
                </div>        
  
            </Container>
        </div>
    );
}

export default Conocimientos;