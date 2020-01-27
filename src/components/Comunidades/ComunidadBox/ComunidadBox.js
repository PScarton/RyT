import React from 'react'

import classes from './ComunidadBox.module.css';

import {Link} from 'react-router-dom';

import { Icon } from '@iconify/react'; 
import bxsBuildingHouse from '@iconify/icons-bx/bxs-building-house';
import arrowRightAlt2 from '@iconify/icons-dashicons/arrow-right-alt2'

const ComunidadBox = (props) => {
    return (
        <Link className={classes.Link} to={props.to}>
            <div className={classes.ComunidadBox}>
                <div>
                    <Icon icon={bxsBuildingHouse} style={{fontSize: '24px'}} />
                    <p>{props.nombre}</p>
                </div>
                <Icon icon={arrowRightAlt2} style={{fontSize: '24px'}} />
            </div>
        </Link>
    )
}

export default ComunidadBox
