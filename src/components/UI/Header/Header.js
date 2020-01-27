import React from 'react'

import { Icon } from '@iconify/react'; 
import bxArrowBack from '@iconify/icons-bx/bx-arrow-back';
import bxDotsVerticalRounded from '@iconify/icons-bx/bx-dots-vertical-rounded';
import baselineDeleteForever from '@iconify/icons-ic/baseline-delete-forever';
import baselineSaveAlt from '@iconify/icons-ic/baseline-save-alt';
import classes from './Header.module.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '../input/Input';

const Header = (props) => {

    let tipo =  <div className={classes.MainHeader}>
                    <div className={classes.ItemsMain}>
                        <p>{props.titulo}</p>
                    </div>
                </div>;
    if(props.buttons){
        tipo = <div className={classes.MainHeader}>
                    <div className={classes.Items}>
                        <Button onClick={props.salir}><Icon icon={bxArrowBack} style={{color: '#000', fontSize: '32px'}} /></Button>
                        <p>{props.titulo}</p>
                        <Button onClick={props.opened}><Icon icon={bxDotsVerticalRounded} style={{color: '#000', fontSize: '32px'}} /></Button>
                    </div>
                    <Menu
                        anchorEl={props.open}
                        keepMounted
                        open={Boolean(props.open)}
                        onClose={props.close}
                    >
                        <MenuItem onClick={props.eliminar}>
                            <div className={classes.optionCont}>
                                <Icon icon={baselineDeleteForever} style={{fontSize: '20px'}} />
                                <p>eliminar</p>
                            </div>
                        </MenuItem>
                    </Menu>
                </div>;
    }
    
    if(props.tarea){
        tipo =  <div className={classes.TareaHeader}>
                    <div className={classes.Items}>
                        <Button onClick={props.salir}><Icon icon={bxArrowBack} style={{color: '#ffffff', fontSize: '32px'}} /></Button>
                        <p>{props.titulo}</p>
                        <Button onClick={props.opened}><Icon icon={bxDotsVerticalRounded} style={{color: '#ffffff', fontSize: '32px'}} /></Button>
                    </div>
                    <Menu
                        anchorEl={props.open}
                        keepMounted
                        open={Boolean(props.open)}
                        onClose={props.close}
                    >
                        <MenuItem onClick={props.eliminar}>
                            <div className={classes.optionCont}>
                                <Icon icon={baselineDeleteForever} style={{fontSize: '20px'}} />
                                <p>Eliminar tarea</p>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={props.archivar}>
                            <div className={classes.optionCont}>
                                <Icon icon={baselineSaveAlt} style={{fontSize: '20px'}} />
                                <p>Archivar tarea</p>
                            </div>
                        </MenuItem>
                    </Menu>
                </div>;
    }
    if(props.userOptions){
        tipo =  <div className={classes.MainHeader}>
                    <div className={classes.ItemsHistory}>
                        <Input onChange={null} naked/>
                    </div>
                </div>;
    }

    return (
        tipo
    )
}

export default Header
