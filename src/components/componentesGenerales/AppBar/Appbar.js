import React from 'react'
import classes from './Appbar.module.css';

import {NavLink} from 'react-router-dom';

import { Icon } from '@iconify/react'; 
import checkCircleOutlined from '@iconify/icons-ant-design/check-circle-outlined';
import baselineNotifications from '@iconify/icons-ic/baseline-notifications';
import bxsBuildingHouse from '@iconify/icons-bx/bxs-building-house';
import searchIcon from '@iconify/icons-feather/search';



const AppBar = () => {

    const activeStyle = {
        filter: 'invert(100%)',
    }

    return(
        <div className={classes.AppBar}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeStyle={activeStyle} to="/mis-tareas" exact>
                            <Icon icon={checkCircleOutlined} style={{fontSize: '24px'}} />
                            <p>Mis tareas</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={activeStyle} to="/bandeja-de-entrada" exact>
                            <Icon icon={baselineNotifications} style={{fontSize: '24px'}} />
                            <p>Bandeja de entrada</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={activeStyle} to="/comunidades">
                            <Icon icon={bxsBuildingHouse} style={{fontSize: '24px'}} />
                            <p>Comunidades</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  activeStyle={activeStyle} to="/historia" exact>
                            <Icon icon={searchIcon} style={{fontSize: '24px'}} />
                            <p>Historia</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default AppBar
