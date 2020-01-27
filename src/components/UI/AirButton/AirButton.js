import React from 'react'

import { Icon } from '@iconify/react'; 
import plusAlt2 from '@iconify/icons-dashicons/plus-alt2';


import classes from './AirButton.module.css';

const AirButton = (props) => {

    return(
        <button onClick={props.onClick} className={classes.AirButton}>
            <Icon icon={plusAlt2} style={{fontSize: '20px'}} />
        </button>
    );
}; 

export default AirButton
