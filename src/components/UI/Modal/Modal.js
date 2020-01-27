import React, { Component } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render () {
        let modal = <div
                        className={classes.Modal}
                        style={{
                            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: this.props.show ? '1' : '0'
                        }}>
                        {this.props.children}
                    </div>
        if(this.props.input){
            modal = <div
                        className={classes.ModalBot}
                        style={{
                            transform: this.props.show ? 'translateY(0)' : 'translateY(200vh)',
                            opacity: this.props.show ? '1' : '0'
                        }}>
                        {this.props.children}
                    </div>
        }
        if(this.props.tarea){
            modal = <div
                        className={classes.ModalTarea}
                        style={{
                            transform: this.props.show ? 'translateX(0)' : 'translateX(200vh)',
                            opacity: this.props.show ? '1' : '0'
                        }}>
                        {this.props.children}
                    </div>
        }
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                {modal}
            </React.Fragment>
        )
    }
}

export default Modal;