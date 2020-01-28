import React, {Component} from 'react';

import Comunidades from './components/paginaDeComunidades/Comunidades/Comunidades';
import Comunidad from './components/paginaDeComunidades/Comunidad/Comunidad';

import {Switch , Redirect , Route } from 'react-router-dom';
import Historia from './components/Historia/Historia';
import MisTareas from './components/MisTareas/MisTareas';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/mis-tareas" exact component={MisTareas}/>
          <Route path="/comunidades" exact component={Comunidades}/>
          <Route path={"/comunidades/:dtKey"} component={Comunidad}/>
          <Route path="/historia" exact component={Historia}/> 
          <Redirect from="/" to="/comunidades"/>
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
