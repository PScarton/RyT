import React, {Component} from 'react';

import Comunidades from './components/paginaDeComunidades/Comunidades/Comunidades';
import Comunidad from './components/paginaDeComunidades/Comunidad/Comunidad';

import {Switch , Redirect , Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/comunidades" exact component={Comunidades}/>
          <Route path={"/comunidades/:dtKey"} component={Comunidad}/>
          <Redirect from="/" to="/comunidades"/>
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
