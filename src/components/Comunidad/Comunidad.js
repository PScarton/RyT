import React, { Component } from 'react';

import classes from './Comunidad.module.css';

import AppBar from '../componentesGenerales/AppBar/Appbar';
import Header from '../UI/Header/Header';
import TareasList from './TareasList/TareasList';
import AirButton from '../UI/AirButton/AirButton';
import Modal from '../UI/Modal/Modal';
import InputBox from '../componentesGenerales/inputBox/InputBox';


import instance from '../../instances/axios-comunidades';

import {withRouter , Redirect } from 'react-router-dom';
import Spinner from '../UI/Spinner/Spinner';

import TareaView from '../Tarea/TareaView/TareaView';

class Comunidad extends Component {

    state = {
        openMenu: null,
        showModal: false,
        showTarea: false,
        redirect: false
    }



    componentDidMount() {
        this.getData();
    }

    //funciones para obtener data de tareas
    getData = () => {
        instance.get(this.props.match.url+'.json')
            .then(response => {
                this.setState({
                    nombreComunidad: response.data.nombre,
                    tareas: response.data.Tareas,
                })
            })
    }

    //funciones para funcionalidad del header
    salir = () => {
        this.setState({redirect: true});
    }
    abrirMenu = (e) => {
        this.setState({openMenu: e.currentTarget})
    }
    cerrarMenu = () => {
        this.setState({openMenu: null})
    }
    eliminar = () => {
        this.cerrarMenu();
        instance.delete(this.props.match.url+'.json')
            .then( () => {
                this.setState({eliminando:false})
                this.setState({redirect: true})
            })
        this.setState({eliminando:true})
    }  

    //funciones de modal
    openModal = () => {
        this.setState({showModal: true})
    }
    closeModal = () => {
        this.setState({
            showModal: false
        })
    }
    setNewTask = (data) => {
        this.closeModal();
        const newTask = {
            titulo: data,
            estado: "Por hacer",
            responsable: "Por asignar...",
            date: "Por asignar...",
            descripcion: null
        }
        instance.post(this.props.match.url+'/Tareas/toDo.json',newTask)
            .then(() => {
                this.getData();
            })
            .catch(error => {
                console.log("Error");
            });
    }

    //funciones para tarea:
    closeTarea = () =>{
        this.setState({
            showTarea: false,
            tarea:null
        },()=> this.getData())
    }

    getDataTarea = (id,type) => {
        let tarea = this.state.tareas[type][id];
        tarea.type = type;
        tarea.id = id;
        this.setState({
            tarea: tarea,
            showTarea: true
        })
    }

    render(){
        let redirect = null
        if(this.state.redirect){
            redirect = <Redirect to="/comunidades"/>
        }
        let dataTodo ,dataInProgress ,dataEnded = null;
        let noTaskToDo , noTaskInProgress, noTaskEnded = false;
        if(this.state.tareas){
            noTaskToDo = true
            if(this.state.tareas.toDo){
                dataTodo=this.state.tareas.toDo;
                noTaskToDo = false;
            }
            noTaskInProgress = true;
            if(this.state.tareas.inProgress){
                dataInProgress=this.state.tareas.inProgress;
                noTaskInProgress = false;
            }
            noTaskEnded = true;
            if(this.state.tareas.ended){
                dataEnded=this.state.tareas.ended
                noTaskEnded = false;
            }

        }
        if(!this.state.tareas){
            noTaskToDo = true
            noTaskInProgress = true;
            noTaskEnded = true;
        }
        let Tarea = null;
        if(this.state.tarea){
            Tarea = <TareaView 
                        comunidad={this.state.nombreComunidad}
                        data={this.state.tarea}
                        modalClosed={this.closeTarea}/>
        }
        let main = <main className={classes.mainCont}>
                        <div className={classes.MainTabs}>
                            <TareasList   
                                data={dataTodo} title="Por hacer"
                                noTask={noTaskToDo}
                                type="toDo"
                                getData={this.getDataTarea}
                                url={this.props.match.pathname}/>
                            <TareasList   
                                data={dataInProgress} title="En proceso"
                                noTask={noTaskInProgress}
                                type="inProgress"
                                getData={this.getDataTarea}
                                url={this.props.match.pathname}/>
                            <TareasList   
                                data={dataEnded} title="Finalizadas"
                                noTask={noTaskEnded}
                                type="ended"
                                getData={this.getDataTarea}
                                url={this.props.match.pathname}/>
                        </div>
                    </main>
            if(this.state.eliminando){
                main = <Spinner/>
            }
            let page = <Spinner/>
            if(!this.state.loading){
                page =  <React.Fragment>
                            <Header open={this.state.openMenu} 
                                    opened={this.abrirMenu} 
                                    close={this.cerrarMenu} 
                                    eliminar={this.eliminar} 
                                    salir={this.salir} 
                                    titulo={this.state.nombreComunidad}
                                    buttons
                                    />
                            {main}
                        </React.Fragment>
            }
        return(
            <React.Fragment>
                {page}
                <Modal show={this.state.showModal} modalClosed={this.closeModal}>
                    <InputBox DataHandler={this.setNewTask} Title="¿Nueva tarea?" etiqueta="Título" etiquetaBoton="ACEPTAR" helpText="Ingresa un título representativo"/>
                </Modal>
                <Modal tarea show={this.state.showTarea} modalClosed={this.closeTarea}>
                    {Tarea}
                        
                </Modal>
                <AppBar/>
                {redirect}
                <AirButton onClick={this.openModal}/>
            </React.Fragment>
        );
    }
}

export default withRouter(Comunidad);

