import React, { Component } from 'react';

import  classes from './Comunidades.module.css';

import Header from '../../UI/Header/Header';
import AppBar from '../../componentesGenerales/AppBar/Appbar';
import Title from '../../UI/Title/Title';
import ComunidadesBox from './ComunidadBox/ComunidadBox';
import Spinner from '../../UI/Spinner/Spinner';
import AirButton from '../../UI/AirButton/AirButton';
import Modal from '../../UI/Modal/Modal';
import InputBox from '../../componentesGenerales/inputBox/InputBox';

import instance from '../../../instances/axios-comunidades';

class Comunidades extends Component{

    state = {
        comunidades: null,
        showModal: false,
        noComunidad: false
    }

    componentDidMount() {
        this.actualiazarComunidades();
    }

    //Rescatando comunidades de la dataBase
    actualiazarComunidades = () => {
        instance.get('/comunidades.json')
            .then( response => {
                this.setState({comunidades:response.data})
                if(!response.data){
                    this.setState({noComunidad: true})
                }
            });
        this.setState({noComunidad: false})
    }

    //Agregando comunidad a la db
    pushComunidad = (data) => {
        console.log(data)
        if(data!==""){
            const newComunidad = {
                nombre: data
            }
            instance.post('/comunidades.json',newComunidad)
                .then(response => { 
                    this.actualiazarComunidades();
                })
                .catch(error => {
                    console.log("No se pudo realizar la operación")
                })
        }
    }

    //funciones de la nueva comunidad
    openModal = () => {
        this.setState({showModal: true})
    }
    closeModal = () => {
        this.setState({showModal: false})
    }

    getNewComunidad = (data) => {
        this.pushComunidad(data);
        this.closeModal();
    }


    render(){
        let Comunidades = <Spinner/>
        if(this.state.comunidades) {
            Comunidades = Object.keys(this.state.comunidades)
            .map(dtKey => {
                return [...Array(this.state.comunidades[dtKey])]
                    .map((comunidad,i) => {
                        return <ComunidadesBox key={dtKey + i } to={'/comunidades/'+dtKey} nombre={comunidad.nombre}/>;
                    })
            }).reduce((arr, el) => {
                return arr.concat(el);
            },[]);
        }
        if(this.state.noComunidad){
            Comunidades=null
        }
        return(
            <React.Fragment>
                <Header titulo="Comunidades"/>
                <main className={classes.MainCont}>
                    <Title title="Tus Comunidades"/>
                    <div className={classes.ComunidadesCont}>
                        {Comunidades}
                    </div>
                </main>
                <AirButton onClick={this.openModal}/>
                <Modal show={this.state.showModal} modalClosed={this.closeModal}>
                    <InputBox DataHandler={this.getNewComunidad} Title="¿Cúal sera el nombre?" etiqueta="Comunidad" etiquetaBoton="ACEPTAR" helpText="Ingresa el nombre de la comunidad"/>
                </Modal>
                <AppBar/>
            </React.Fragment>
        );
    }
}

export default Comunidades