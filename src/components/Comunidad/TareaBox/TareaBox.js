import React from 'react'

import classes from './TareaBox.module.css';


const TareaBox = (props) => {
    return (
        <div onClick={props.onClick} className={classes.Link} to={props.to}>
            <div className={classes.TareaBox}>
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default TareaBox
