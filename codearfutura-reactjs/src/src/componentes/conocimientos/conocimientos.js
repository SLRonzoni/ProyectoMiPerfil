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
                            console.log("estudios",estudios)
                            console.log("cursos",cursos)
    }

    //funcion para traer datos FILTRADOS de Api Node
    const getFiltraCursos = async () =>  {
      const data = await fetch('http://localhost:3000/profileFilter?lenguaje='+filtraPor)
      const estudios = await data.json() 
      setCursos(estudios)
                            console.log("estudiosFiltrado",estudios)
                            console.log("cursosMuestra",cursos)
    }

     let filtraPor;
     
   
    //evento de seleccion de filtro  
    const cambios=(e)=>{
        filtraPor=e.target.value;
        if(e.target.value==='volver'){
           getCursos()
                    console.log("volver_cursos",cursos)
        } else {
          getFiltraCursos()
      
                            console.log("targetName: ",e.target.name)
                            console.log("targetValue: ",e.target.value)               
                            console.log("cursos: ",cursos)
                            console.log("filtraPor: ",filtraPor)       
    };  
  }

return (
  <Fragment>  
    <div className="homeAcerca">
            <Intro titulo="Silvina Ronzoni" />
            <Container className="fondoConocimientos">
                <br></br> 
                <Row>
                <div className="d-grid gap-5 d-md-flex ">
                <h2 className="textoConocimiento"><u>Conocimientos</u></h2>
                <a href= 'https://github.com/SLRonzoni/MediaChicasGit' className="linkProyecto btn  ">Ver Mis Proyectos en Github</a>
                </div>
                </Row>
                <br></br> 
                <Row>                  
                <div className="d-grid gap-4 d-md-flex justify-content-md-end" >
                    <p className='mostrar' >Seleccione . . .</p>
                    <select type="text"name="lenguajes" onChange={cambios} 
                           className='m-3 mr-md-1 btn linkProyecto btnTexto'>
                                <option value={'volver'} >Mostrar todas las especialidades</option> 
                                {cursos.map(unLenguaje=>(
                                   <option key={unLenguaje.id}
                                           value={unLenguaje.lenguaje} 
                                           >{unLenguaje.lenguaje}
                                   </option>
                                ))}                                    
                    </select>
                       
                </div>
                </Row>
                <br></br>
                <div className="row">
                <div className="col-md-12">
                <h2 className="textoListaCursos">Cursos realizados</h2>
                <table className="table table-bordered"> 
                    <thead className="thead-dark">
                        <tr> 
                        <th className="col">Item</th>
                        <th className="col">Curso</th>
                        <th className="col">Entidad</th>
                        <th className="col">Especialidad</th>
                        <th className="col">Inicio</th>
                        <th className="col">Fin</th>
                        <th className="col">Carga Horaria</th>
                        <th className="col">Certificado</th>
                        </tr>  
                    </thead> 

                   <tbody className="datosBody">
                        {cursos.map(curso => (
                            <tr key={curso.id}>
                            <td className="columna">{curso.id}</td>
                            <td className="columna" >{curso.nombreCurso}</td>
                            <td className="columna">{curso.entidad}</td>
                            <td className="columna">{curso.lenguaje}</td>
                            <td className="columna" >{curso.inicio} </td>
                            <td className="columna" >{curso.fin}</td>
                            <td className="columna hs">{curso.cargaHs} </td>
                            <td className="columna hs">{curso.certificado} ✅ </td>
                            </tr>
                        ))}
                    </tbody>
                 </table>

    <br></br>
    <br></br> 
      <div>
          <div className="prestaInput col-sm-5  container ">              
          </div>
      </div>
    </div>
    </div>
             </Container>
      </div> 
  </Fragment>
 
)};

export default withRouter(Cursos);
