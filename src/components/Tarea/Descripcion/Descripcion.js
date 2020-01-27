import React from 'react';

import { Icon } from '@iconify/react'; 
import arrowDownAlt2 from '@iconify/icons-dashicons/arrow-down-alt2';
import bxsBuildingHouse from '@iconify/icons-bx/bxs-building-house';

import classes from './Descripcion.module.css';
import Input from '../../UI/input/Input';

const Descripcion = (props) => {
        let descripcion = ""
        if(props.descripcion){
            descripcion = props.descripcion
        }
        return(
            <div className={classes.Descripcion}>
                <div className={classes.Header}>
                    <div className={classes.contItems}>
                        <Icon icon={bxsBuildingHouse} style={{fontSize: '24px'}} />
                        <p>{props.comunidad}</p>
                    </div>
                    <button onClick={props.openModal}>
                        <p className={classes.Estado}>{props.estado}</p>
                        <Icon icon={arrowDownAlt2} style={{fontSize: '14px'}} />
                    </button>
                </div>
                <div className={classes.Contenido}>
                    <Input row etiqueta="Descrición" onChange={props.setDescripcion} value={descripcion}/>
                </div>
            </div>
        );
}

export default Descripcion
