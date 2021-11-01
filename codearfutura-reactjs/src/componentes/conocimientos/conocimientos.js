import React, {useState,useEffect} from 'react';
import './conocimientos.css';
import  {Container}  from 'react-bootstrap';
import  Intro from '../intro/intro';
import { withRouter } from 'react-router';
import { Row } from 'react-bootstrap';
import { Fragment } from 'react';

const Cursos = () =>{

    const [cursos,setCursos]=useState([{
      id:'',
      nombreCurso:'',
      entidad:'',
      lenguaje:'',
      inicio:'',
      fin:'',
      cargaHs:'',
      certificado:''
    }]);  

    // hago peticion para obtener los datos de mi JSON
    useEffect(() =>{
        getCursos()
    },[])

    //funcion para traer TODOS los datos de Api Node
    const getCursos = async ()=>{
      const data = await fetch('http://localhost:3000/profile')
      const estudios = await data.json()
      setCursos(estudios)
    }

    //funcion para traer datos FILTRADOS  x lenguajede Api Node
    const getFiltraEspecialidad = async () =>  {
      const data = await fetch('http://localhost:3000/profileFilter?lenguaje='+filtraPor)
      const estudios = await data.json() 
      setCursos(estudios)
    }

    //funcion para traer datos FILTRADOS  x Anio Fin Api Node
    const getFiltraAnio = async () =>  {
      const data = await fetch('http://localhost:3000/profileFilterAnio?fin='+filtraPor)
      const estudios = await data.json() 
      setCursos(estudios)
    }

     let filtraPor;
        
    //evento de seleccion de filtro por lenguaje 
    const cambiosLenguaje=(e)=>{
        filtraPor=e.target.value;
      
        if(e.target.value==='volver'){
           getCursos()
                    console.log("volver_cursos",cursos)
        } else {
          getFiltraEspecialidad()                            
        };  
    }

    //evento de seleccion de filtro por lenguaje 
    const cambiosAnio=(e)=>{
      filtraPor=e.target.value;

      if(e.target.value==='volver'){
        getCursos()
                  console.log("volver_cursos",cursos)
      } else {
        getFiltraAnio()                 
      };  
    }


return (
  <Fragment>  
    <div className="homeAcerca">
            <Intro titulo="Silvina Ronzoni" />
            <Container className="fondoConocimientos">
                <br></br> 
                <Row>
                <div className="d-grid gap-2 d-md-flex ">
                <h2 className="textoConocimiento"><u>Conocimientos</u></h2>
                <a href= 'https://github.com/SLRonzoni/MediaChicasGit' className="linkProyecto btn  ">Ver Mis Proyectos en Github</a>
                </div>
                </Row>
                 <br></br> 
                <Row>  
                <div className="alineaBtn" > 
               
                    <select type="text"name="lenguaje" onChange={cambiosLenguaje} 
                           className='btn linkProyecto btnTexto'>
                                <option value={'volver'} >Todas las especialidades</option> 
                                {cursos.map(unLenguaje=>(
                                   <option key={unLenguaje.id}
                                           value={unLenguaje.lenguaje} 
                                           >{unLenguaje.lenguaje}
                                   </option>
                                ))}                                    
                    </select>
                    
                    <select type="text"name="fin" onChange={cambiosAnio} 
                           className='btn linkProyecto btnTexto'>
                                <option value={'volver'} >Todos los años</option> 
                                {cursos.map(unFin=>(
                                   <option key={unFin.id}
                                           value={unFin.fin} 
                                           >{unFin.fin}
                                   </option>
                                ))}                                    
                    </select>
                       
                  </div>
                  </Row>
                  <br></br>
                  <div className="row">
                  <div className="col-md-12">
                  <table className="table table-bordered"> 
                      <thead className="thead-dark">
                          <tr> 
                          <th className="col hs">Item</th>
                          <th className="col">Curso</th>
                          <th className="col">Entidad</th>
                          <th className="col">Especialidad</th>
                          <th className="col hs">Inicio</th>
                          <th className="col hs">Fin</th>
                          <th className="col hs">Carga Horaria</th>
                          <th className="col hs">Certificado</th>
                          </tr>  
                      </thead> 

                      <tbody className="datosBody">
                            {cursos.map(curso => (
                                <tr key={curso.id}>
                                <td className="columna">{curso.id}</td>
                                <td className="columna" >{curso.nombreCurso}</td>
                                <td className="columna">{curso.entidad}</td>
                                <td className="columna">{curso.lenguaje}</td>
                                <td className="columna hs iniFin" >{curso.inicio} </td>
                                <td className="columna hs iniFin" >{curso.fin}</td>
                                <td className="columna hs">{curso.cargaHs} </td>
                                <td className="columna hs">{curso.certificado} ✅ </td>
                                </tr>
                            ))}
                        </tbody>
                  </table>
                  </div>
                  </div>
             </Container>
      </div> 
  </Fragment>
 
)};

export default withRouter(Cursos);
