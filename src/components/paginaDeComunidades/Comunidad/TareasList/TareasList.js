import React from 'react';

import classes from './TareasList.module.css';

import TareaBox from '../TareaBox/TareaBox';

import { Icon } from '@iconify/react'; 
import arrowDownAlt2 from '@iconify/icons-dashicons/arrow-down-alt2';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const TareasList = (props) => {
    let Tareas = null
    if(props.data){
        if(props.data)
        Tareas = Object.keys(props.data)
        .map(dtKey => {
            return [...Array(props.data[dtKey])]
                .map((tarea,i) => {
                    return (
                        <TareaBox key={dtKey + i } title={tarea.titulo} onClick={() => props.getData(dtKey,props.type)}/>
                    );
                })
        }).reduce((arr, el) => {
            return arr.concat(el);
        },[]);
    }
    if(props.noTask) {
        Tareas = null
    }

    return (
        <div className={classes.MainCont}>
            <div className={classes.HeaderCont}>
                <p>{props.title}</p>
                <button onClick={props.opened} className={classes.Boton}>
                    <Icon icon={arrowDownAlt2} style={{fontSize: '18px'}} />
                </button>
                <Menu
                        anchorEl={props.open}
                        keepMounted
                        open={Boolean(props.open)}
                        onClose={props.close}
                    >
                        <MenuItem onClick={props.eliminar}>
                            <div className={classes.optionCont}>
                                <p>Almacenar tareas</p>
                            </div>
                        </MenuItem>
                    </Menu>
            </div>
            <div>
                {Tareas}
            </div>
        </div>
    )
}

export default TareasList
