import React, {Component} from 'react'

import classes from './TareaDetails.module.css'

import { Icon } from '@iconify/react'; 
import bxsUser from '@iconify/icons-bx/bxs-user';
import calendarOutline from '@iconify/icons-ion/calendar-outline';
import Calendario from '../../../UI/Calendario/Calendario';
import Modal from '../../../UI/Modal/Modal';

import {format, parseISO} from 'date-fns'
import { es } from 'date-fns/locale';
import InputBox from '../../../componentesGenerales/inputBox/InputBox';

class TareaDetails extends Component {

    state = {
        showCalendar: false,
        showModal: false,
    }

    //funciones para dar formato a la fecha
    setFormato = (date) => {
        const fecha = format(
            date,
            'd MMM',
            {locale: es})
        return fecha;
    }

    //funciones para calendario
    openCalendar = () => {
        this.setState({showCalendar:true})
    }
    closeCalendar = () => {
        this.setState({showCalendar:false})
    }
    enviarDate = (date) => {
        this.setFormato(date);
        this.closeCalendar();
        this.props.getDate(date);
    }

    //funciones para responsable
    openModal = () => {
        this.setState({showModal: true})
    }
    closeModal = () => {
        this.setState({showModal: false})
    }

    DataHandler = (responsable) => {
        if(responsable===""){
            responsable="Por asignar..."
        }
        this.props.getResponsable(responsable);
        this.closeModal();
    }

    render(){

        let fecha = this.props.date;
        if(this.props.date!=="Por asignar..."){
            if(typeof(fecha)===typeof("")){
                fecha = this.setFormato(parseISO (fecha))
            } else {
                fecha = this.setFormato(fecha)
            }
        }
        return(
            <div className={classes.DetailCont}>

                <div className={classes.midCont}>

                    <button onClick={this.openModal} >
                        <Icon icon={bxsUser} style={{fontSize: '30px'}} />
                        <div className={classes.SmallCont}>
                            <p className={classes.Titulito}>asignado a</p>
                            <p className={classes.Contenido}>{this.props.responsable}</p>
                        </div>
                    </button>

                    <button onClick={this.openCalendar}>
                        <Icon icon={calendarOutline} style={{fontSize: '30px'}} />
                        <div className={classes.SmallCont}>
                            <p className={classes.Titulito}>fecha de entrega</p>
                            <p className={classes.Contenido}>{fecha}</p>
                        </div>
                    </button>

                </div>
                <div style={{display: 'none'}}>
                    <Calendario 
                        isOpen={this.state.showCalendar} 
                        opened={this.openCalendar} 
                        closed={this.closeCalendar} 
                        fecha={this.props.date}
                        cambiarFecha={this.props.getDate}/>
                </div>
                <Modal show={this.state.showModal} modalClosed={this.closeModal}>
                    <InputBox DataHandler={this.DataHandler} Title="¿Nuevo Responsable?" etiqueta="Responsable" etiquetaBoton="ACTUALIZAR"/>
                </Modal>
            </div>
        );
    }
}

export default TareaDetails
