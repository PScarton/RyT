import React from 'react'

import classes from './defaultPage.module.css';

import { Icon } from '@iconify/react'; 
import bxSearchAlt from '@iconify/icons-bx/bx-search-alt';

const defaultPage = () => {
    return (
        <div className={classes.MainCont}>
            <Icon icon={bxSearchAlt} style={{fontSize: '164px'}} />
            <svg className={classes.cont}>
                <ellipse cx='150' cy='15' rx='100' ry='10' style={{fill:'rgba(194, 192, 192, 0.26)'}} />
            </svg>
            <div className={classes.TextContent}>
            <p>Realiza busquedas de tareas entre todas las comunidades</p>
            </div>
        </div>
    )
}

export default defaultPage
