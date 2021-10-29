import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Menu from './componentes/navbar/navbar';
import Footer from './componentes/footer/footer';

import Acerca from './componentes/acerca/acerca';
import Antecedentes from './componentes/antecedentes/antecedentes';
import Cursos from './componentes/conocimientos/conocimientos';
import Contacto from './componentes/contacto/contacto';


function App() {
  return ( 
    <BrowserRouter>
        <Menu />
        <Switch>
 
          <Route exact path="/"> <Acerca/> </Route>

          <Route exact path="/acerca"> <Acerca/> </Route>

          <Route exact path="/conocimientos"><Cursos/> </Route>
         
          <Route exact path="/antecedentes"> <Antecedentes/> </Route>

          <Route exact path="/contacto">  <Contacto /> </Route>
        </Switch>
        
        <Footer/>
    </BrowserRouter>    
  );
}

export default App;
