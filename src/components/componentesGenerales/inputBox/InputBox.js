import React, {Component} from 'react'

import classes from './InputBox.module.css';
import Input from '../../UI/input/Input';

import Boton from '../../UI/Boton/Boton';

class InputBox extends Component {

    state = {
        data: ''
    }

    DataHandler = (event) => {
        this.setState({data: event.target.value})
    }

    enviarData = () => {
        this.props.DataHandler(this.state.data);
        this.setState({data:''})
    }

    render(){
        return(
            <div className={classes.FormCont}>
                <p className={classes.Title}>{this.props.Title}</p>
                <Input onChange={this.DataHandler} value={this.state.data} etiqueta={this.props.etiqueta} TextoDeAyuda={this.props.helpText}/>
                <div className={classes.BotonCont}>
                    <Boton onClick={this.enviarData} etiqueta={this.props.etiquetaBoton}/>
                </div>
            </div>
        )
    }
}


export default InputBox
