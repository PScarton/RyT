import React, {Component} from 'react';

import { withRouter } from 'react-router-dom'

import Header from '../../UI/Header/Header';
import TareaDetails from '../TareaDetails/TareaDetails';
import Descripcion from '../Descripcion/Descripcion';
import Modal from '../../UI/Modal/Modal';
import ChangeState from '../ChangeState/ChangeState';

import instance from '../../../instances/axios-comunidades';
import Spinner from '../../UI/Spinner/Spinner';

class TareaView extends Component {

    state = {
        menu:null,
        modal:false,
        titulo: this.props.data.titulo,
        responsable:this.props.data.responsable,
        date:this.props.data.date,
        estado:this.props.data.estado,
        descripcion:this.props.data.descripcion,
        direccion: this.props.match.url+"/Tareas/"+this.props.data.type+"/"+this.props.data.id+".json"
    }

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps !== this.props || nextState !== this.state;
    }

    //funcion para obtener la data de la tarea
    actualizarTareaData = (tipo,data) => {
        let tarea = {
            titulo: this.state.titulo,
            responsable:this.state.responsable,
            date:this.state.date,
            estado:this.state.estado,
            descripcion:this.state.descripcion,
        }
        tarea[tipo] = data
        return tarea
    }

    //menu
    cambio = () => {
        this.setState({menu:true})
    }
    opened = (e) => {
        this.setState({menu:e.currentTarget})
    }
    close = () => {
        this.setState({menu:null})
    }
    eliminar = () => {
        this.close();
        instance.delete(this.state.direccion)
            .then(() => {
                this.props.modalClosed();
            });
    }

    /*  Tarea details

        estas son las funciones requeridas para que el usuario cambie el responsable y la fecha de entrega*/
    
    //funciones para obtener los datos de los componentes
    getResponsable = (responsable) => {
        this.setState({responsable: responsable}, 
            () => {
                const newTarea = this.actualizarTareaData('responsable',responsable)
                instance.put(this.state.direccion,newTarea)
            })
    }

    getDate = (date) => {
        this.setState({date:date}, 
            () => {
                const newTarea = this.actualizarTareaData('date',date)
                instance.put(this.state.direccion,newTarea)
            })
    }


    /** Funciones necesarias para la modificacion del estado de tareas */
    showModal = () => {
        this.setState({modal:true})
    }
    closeModal = () => {
        this.setState({modal:false})
    }
    setEstado = (e) => {
        const estado = e.target.value
        if(estado !== this.state.estado){
            this.closeModal();
            this.setState({estado:estado},
            () => {
                const newTarea = this.actualizarTareaData('estado', estado);
                if(estado === "Por hacer"){
                    //Hago el post de la nueva tarea
                    instance.post(this.props.match.url+"/Tareas/toDo.json",newTarea)
                        .then( (response) => {
                            //Aqui obtengo el url de donde se encuentra la nueva tarea para identificarla
                            const newUrl = this.props.match.url+"/Tareas/toDo/"+response.data.name+".json"
                            //elimino la tarea previa con la direccion previa
                            instance.delete(this.state.direccion)
                                .then( () => {
                                    //actualizo la direccion una vez la tarea fue eliminada
                                    this.setState({direccion:newUrl})
                                });
                        }
                        );
                                        /* Repito el mismo proceso de arriba para los diferentes estados */
                } else if (estado === "En proceso") {
                     instance.post(this.props.match.url+"/Tareas/inProgress.json",newTarea)
                     .then( (response) => {
                         const newUrl = this.props.match.url+"/Tareas/inProgress/"+response.data.name+".json"
                         instance.delete(this.state.direccion)
                             .then( () => {
                                 this.setState({direccion:newUrl})
                             });
                     }
                     );
                } else {
                     instance.post(this.props.match.url+"/Tareas/ended.json",newTarea)
                     .then( (response) => {
                         const newUrl = this.props.match.url+"/Tareas/ended/"+response.data.name+".json"
                         instance.delete(this.state.direccion)
                             .then( () => {
                                 this.setState({direccion:newUrl})
                             });
                     }
                     );
                }
            });
        }
    }

    //descripcion.
    setDescripcion = () => {

    }
    render(){
        let pagina = <Spinner/>;
        if(this.props.data){
            pagina = <React.Fragment>
                        <Header
                            titulo={this.state.titulo}
                            tarea
                            opened={this.opened}
                            open={this.state.menu}
                            close={this.close}
                            eliminar={this.eliminar}
                            salir={this.props.modalClosed}
                        />
                        <TareaDetails
                            /*necesito pasarle los props de la data*/
                            responsable = {this.state.responsable}
                            date = {this.state.date}

                            /* funciones para extraer la data del componente */
                            getResponsable = {this.getResponsable}
                            getDate = {this.getDate}
                        />
                        <Descripcion 
                            comunidad={this.props.comunidad}
                            estado={this.state.estado}
                            openModal={this.showModal}
                            />
                        <Modal input show={this.state.modal} modalClosed={this.closeModal}>
                                <ChangeState estadoDeTarea={this.state.estado} setEstado={this.setEstado}/>
                        </Modal> 
                        
                    </React.Fragment>
        }
        return(
            pagina
        )
    }
}

export default withRouter(TareaView);