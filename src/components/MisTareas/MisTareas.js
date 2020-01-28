import React, { Component } from 'react';

import Appbar from '../componentesGenerales/AppBar/Appbar';
import Header from '../UI/Header/Header';

import classes from './MisTareas.module.css';

import Title from '../UI/Title/Title';

class Historia extends Component {
    state= {
        palabra: null
    }
    cambio = () => {

    }

    render(){
        return(
            <React.Fragment>
                <Header
                    titulo="Mis Tareas"/>
                <main className={classes.MainCont}>
                    <Title title="Asignadas recientemente"/>
                </main> 
                <Appbar/>
            </React.Fragment>
        );
    }
}

export default Historia;