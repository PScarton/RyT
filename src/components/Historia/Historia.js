import React, { Component } from 'react';

import Appbar from '../componentesGenerales/AppBar/Appbar';
import Header from '../UI/Header/Header';

import classes from './Historia.module.css';
import DefaultPage from './defaultPage/defaultPage';

class Historia extends Component {
    state= {
        palabra: null
    }
    cambio = () => {

    }

    render(){
        let main = null
        return(
            <React.Fragment>
                <Header
                    titulo="Historia"
                    userOptions/>
                <main className={classes.MainCont}>
                    <DefaultPage/>
                </main>
                <Appbar/>
            </React.Fragment>
        );
    }
}

export default Historia;